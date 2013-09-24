function Migrator(e,t){this.db=t,this.dbname=e.adapter.db_name,this.table=e.adapter.collection_name,this.idAttribute=e.adapter.idAttribute,this.column=function(e){var t=e.split(/\s+/),i=t[0];switch(i.toLowerCase()){case"string":case"varchar":case"date":case"datetime":Ti.API.warn('"'+i+'" is not a valid sqlite field, using TEXT instead');case"text":i="TEXT";break;case"int":case"tinyint":case"smallint":case"bigint":case"boolean":Ti.API.warn('"'+i+'" is not a valid sqlite field, using INTEGER instead');case"integer":i="INTEGER";break;case"double":case"float":case"decimal":case"number":Ti.API.warn('"'+e+'" is not a valid sqlite field, using REAL instead');case"real":i="REAL";break;case"blob":i="BLOB";break;case"null":i="NULL";break;default:i="TEXT"}return t[0]=i,t.join(" ")},this.createTable=function(e){var t=[],i=!1;for(var o in e.columns)o===this.idAttribute&&(i=!0),t.push(o+" "+this.column(e.columns[o]));i||this.idAttribute!==ALLOY_ID_DEFAULT||t.push(ALLOY_ID_DEFAULT+" TEXT UNIQUE");var a="CREATE TABLE IF NOT EXISTS "+this.table+" ( "+t.join(",")+")";this.db.execute(a)},this.dropTable=function(){this.db.execute("DROP TABLE IF EXISTS "+this.table)},this.insertRow=function(e){var t=[],i=[],o=[],a=!1;for(var l in e)l===this.idAttribute&&(a=!0),t.push(l),i.push(e[l]),o.push("?");a||this.idAttribute!==ALLOY_ID_DEFAULT||(t.push(this.idAttribute),i.push(util.guid()),o.push("?")),this.db.execute("INSERT INTO "+this.table+" ("+t.join(",")+") VALUES ("+o.join(",")+");",i)},this.deleteRow=function(e){var t="DELETE FROM "+this.table,i=_.keys(e),o=i.length,a=[],l=[];o&&(t+=" WHERE ");for(var r=0;o>r;r++)a.push(i[r]+" = ?"),l.push(e[i[r]]);t+=a.join(" AND "),this.db.execute(t,l)}}function Sync(e,t,i){var o,a=t.config.adapter.collection_name,l=t.config.columns,r=t.config.adapter.db_name||ALLOY_DB_DEFAULT,s=null;switch(e){case"create":case"update":s=function(){var e={};t.id||(t.id=t.idAttribute===ALLOY_ID_DEFAULT?util.guid():null,e[t.idAttribute]=t.id,t.set(e,{silent:!0}));var i=[],s=[],n=[];for(var d in l)i.push(d),s.push(t.get(d)),n.push("?");var _="REPLACE INTO "+a+" ("+i.join(",")+") VALUES ("+n.join(",")+");";if(o=Ti.Database.open(r),o.execute("BEGIN;"),o.execute(_,s),null===t.id){var c="SELECT last_insert_rowid();",y=o.execute(c);y&&y.isValidRow()?(t.id=y.field(0),e[t.idAttribute]=t.id,t.set(e,{silent:!0})):Ti.API.warn("Unable to get ID from database for model: "+t.toJSON()),y&&y.close()}return o.execute("COMMIT;"),o.close(),t.toJSON()}();break;case"read":var n=i.query||"SELECT * FROM "+a;o=Ti.Database.open(r);var d;d=_.isString(n)?o.execute(n):o.execute(n.statement,n.params);for(var c=0,y=[];d.isValidRow();){var h={},u=0;u=_.isFunction(d.fieldCount)?d.fieldCount():d.fieldCount,_.times(u,function(e){var t=d.fieldName(e);h[t]=d.fieldByName(t)}),y.push(h),c++,d.next()}d.close(),o.close(),t.length=c,s=1===c?y[0]:y;break;case"delete":var n="DELETE FROM "+a+" WHERE "+t.idAttribute+"=?";o=Ti.Database.open(r),o.execute(n,t.id),o.close(),t.id=null,s=t.toJSON()}s?(_.isFunction(i.success)&&i.success(s),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(s)}function GetMigrationFor(e,t){var i=null,o=Ti.Database.open(e);o.execute("CREATE TABLE IF NOT EXISTS migrations (latest TEXT, model TEXT);");var a=o.execute("SELECT latest FROM migrations where model = ?;",t);if(a.isValidRow())var i=a.field(0)+"";return a.close(),o.close(),i}function Migrate(e){var t=e.migrations||[],i={};t.length&&t[t.length-1](i);var o=e.prototype.config;o.adapter.db_name||(o.adapter.db_name=ALLOY_DB_DEFAULT);var a=new Migrator(o),l=o.adapter.migration===void 0||null===o.adapter.migration?i.id:o.adapter.migration;if(l===void 0||null===l){var r=Ti.Database.open(o.adapter.db_name);return a.db=r,a.createTable(o),r.close(),void 0}l+="";var s,n=GetMigrationFor(o.adapter.db_name,o.adapter.collection_name);if(n!==l){if(n&&n>l?(s=0,t.reverse()):s=1,db=Ti.Database.open(o.adapter.db_name),a.db=db,db.execute("BEGIN;"),t.length)for(var d=0;t.length>d;d++){var c=t[d],y={};if(c(y),s){if(y.id>l)break;if(n>=y.id)continue}else{if(l>=y.id)break;if(y.id>n)continue}var h=s?"up":"down";_.isFunction(y[h])&&y[h](a)}else a.createTable(o);db.execute("DELETE FROM migrations where model = ?",o.adapter.collection_name),db.execute("INSERT INTO migrations VALUES (?,?)",l,o.adapter.collection_name),db.execute("COMMIT;"),db.close(),a.db=null}}function installDatabase(e){var t=e.adapter.db_file,i=e.adapter.collection_name,o=/(^|.*\/)([^\/]+)\.[^\/]+$/,a=t.match(o);if(null===a)throw'Invalid sql database filename "'+t+'"';e.adapter.db_name=e.adapter.db_name||a[2];var l=e.adapter.db_name;Ti.API.debug('Installing sql database "'+t+'" with name "'+l+'"');for(var r=Ti.Database.install(t,l),s=r.execute('pragma table_info("'+i+'");'),n={};s.isValidRow();){var d=s.fieldByName("name"),c=s.fieldByName("type");n[d]=c,d!==ALLOY_ID_DEFAULT||e.adapter.idAttribute||(e.adapter.idAttribute=ALLOY_ID_DEFAULT),s.next()}if(e.columns=n,s.close(),e.adapter.idAttribute){if(!_.contains(_.keys(e.columns),e.adapter.idAttribute))throw'config.adapter.idAttribute "'+e.adapter.idAttribute+'" not found in list of columns for table "'+i+'"\n'+"columns: ["+_.keys(e.columns).join(",")+"]"}else{Ti.API.info('No config.adapter.idAttribute specified for table "'+i+'"'),Ti.API.info('Adding "'+ALLOY_ID_DEFAULT+'" to uniquely identify rows');var y=[],h=[];_.each(e.columns,function(e,t){h.push(t),y.push(t+" "+e)});var u=h.join(",");r.execute("ALTER TABLE "+i+" RENAME TO "+i+"_temp;"),r.execute("CREATE TABLE "+i+"("+y.join(",")+","+ALLOY_ID_DEFAULT+" TEXT UNIQUE);"),r.execute("INSERT INTO "+i+"("+u+","+ALLOY_ID_DEFAULT+") SELECT "+u+",CAST(_ROWID_ AS TEXT) FROM "+i+"_temp;"),r.execute("DROP TABLE "+i+"_temp;"),e.columns[ALLOY_ID_DEFAULT]="TEXT UNIQUE",e.adapter.idAttribute=ALLOY_ID_DEFAULT}r.close()}var _=require("alloy/underscore")._,util=require("alloy/sync/util"),ALLOY_DB_DEFAULT="_alloy_",ALLOY_ID_DEFAULT="alloy_id",cache={config:{},Model:{}};module.exports.beforeModelCreate=function(e,t){if(cache.config[t])return cache.config[t];throw"No support for Titanium.Database in MobileWeb environment."},module.exports.afterModelCreate=function(e,t){return cache.Model[t]?cache.Model[t]:(e||(e={}),e.prototype.idAttribute=e.prototype.config.adapter.idAttribute,Migrate(e),cache.Model[t]=e,e)},module.exports.sync=Sync;