
var mode="";

try{
    mode=process.argv[3];
}catch (err){
    //ignore
    mode="";
}
    
function determineResponseType( data ) {
    if (mode == null || mode === "") {
        //console.log(`mode:${mode} discovery`);
        if ( data != null || data.trim().length()>0 ){
            if ( data.indexOf('"staticIps":') > -1) {
                mode="--staticip";
            } else if ( data.indexOf('"instances":') > -1) {
                mode="--instance"
            }
        }
        //console.log(`mode:${mode} discovery`);
    }
}


function format_stdout( oType, trgName, jO ){
    let r = 1;
    let a = 0;
    let s = "";
    switch ( oType ){
        case '--staticip':
            o.staticIps.forEach(function(ip){
                if (ip.name === trgName){
                    r=0;
                    console.log(`found:true,name:${ip.name},isAttached:${ip.isAttached},addr:${ip.ipAddress},region:${ip.location.regionName}`);
                } 
            });
            if (r===1){
                console.log(`found:false,name:${trgName},isAttached:unknown,addr:unknown,region:unknown`);   
            }
            break;
        case '--free-static-ip':
                //changes: comment our r, added a, allocated str template to s.
                o.staticIps.forEach(function(ip){
                    if (/*r === 1 &&*/ ip.isAttached === false ) {
                        a++;
                        if ( trgName.trim().length === 0 || (ip.name.indexOf(trgName.trim())>-1 )){
                            r=0;
                            s=`found:true,name:${ip.name},isAttached:${ip.isAttached},addr:${ip.ipAddress},region:${ip.location.regionName}`;
                            a--;
                        }//else {
                           // a++;// increment to show that we have unattached static ips that dont match our criteria.
                        //}      
                    }
                    
                });
                if (r===1){
                    console.log(`found:false,name:unknown,isAttached:unknown,addr:unknown,region:unknown,NoOfUnattached:${a}`);   
                }else {
                    console.log(`${s},NoOfUnattached:${a}`);
                }
            break;
        case '--look-for-free-static-ip':
                //changes: comment our r, added a, allocated str template to s.
                o.staticIps.forEach(function(ip){
                    console.log(`match:${ip.name} - ${trgName} - ${(ip.name.indexOf(trgName.trim())>-1 )}`);
                    if (/*r === 1 && by removing this, we take the last created*/ip.isAttached === false && (ip.name.indexOf(trgName.trim())>-1 )) {
                        r=0;
                        s=`found:true,name:${ip.name},isAttached:${ip.isAttached},addr:${ip.ipAddress},region:${ip.location.regionName}`;
                    } else{
                        a++;// increment to show that we have unattached static ips that dont match our criteria.
                    }
                });
                if (r===1){
                    console.log(`found:false,name:unknown,isAttached:unknown,addr:unknown,region:unknown,NoOfUnattached:${a}`);   
                } else {
                    console.log(`${s},NoOfUnattached:${a}`);
                }
            break;
        case '--instance':
                o.instances.forEach(function(instance){
                    if (instance.name === trgName){
                        r=0;
                        console.log(`name:${instance.name},state:${instance.state.code},statename:${instance.state.name},prvtIPAddr:${instance.privateIpAddress},pubIPAddr:${instance.publicIpAddress}`);
                    } 
                });
                if ( r === 1){
                    console.log(`name:${trgName},state:-1,statename:unknown`); 
                }    
            break;
    }

    return (r);
}

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var d = "";
var r = 1;

rl.on('line', function(l){
    d=d+l;
    determineResponseType(d);
})
rl.on('close', function(err){
    let r = 1;
    try{
        o=JSON.parse(d);
        r = format_stdout( mode/*process.argv[3]*//* instance, staticip etc */, process.argv[2] /* the name of the object to search for. */, o);
    }catch (err){
        console.log(`ERROR-unexpected-data-stdin:${err}`);
    }
   
    process.exit(r);
});

