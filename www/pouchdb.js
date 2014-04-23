function tpouch(x,y,z)
{
  var db = new PouchDB('test');
  var d = {};
  d._id=x;
  d.lat=y;
  d.lon=z;
  db.post(d,function(error, response) {
    if (error) {
      console.log(error);
      return;
    } else if(response && response.ok) {
      /* Do something with the response. */
    }
  });
  db.allDocs({include_docs: true}, function(err, response) {showTableOfBooks(response.rows); });
};
 function showTableOfBooks(rows){
 var str ="<table border ='1'><tr><th>Time Stamp</th>"+"<th> Latitude </th><th> Latitude </th>";
 for( var i=0;i<rows.length;i++)
 {
   str + ="tr><td>"+rows[i].doc._id+"</td><td>"+rows[i].doc.lat+"</td><td>"+rows[i].doc.lon+"</td><tr>"
 }
 str +="</table>";
 document.getElementById("pouch").innerHTML = str;
 };