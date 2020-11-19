function enter()
{
    var num=document.getElementById('userComments').value;
    if(num!="")
    {
    	var data = document.createElement("p");
    var line = document.createTextNode(num);
     data.appendChild(line);
    document.getElementById('addComments').appendChild(data);
    document.getElementById('userComments').value="";
    }
    
}


var num=0;
function addlike()
{
    num=num+1;
    document.getElementById('likeBlog').innerHTML=" Liked!";
    if(num<2)
    {
        document.getElementById('likeCount').innerHTML=+num+" person likes this!";
    }
    else
    {
         document.getElementById('likeCount').innerHTML=+num+" people have liked this!";
    }
}

/**/

function edit()
{
	var data=document.getElementById('edit-button').value;
	if(data=="Edit")
	{
		console.log("heool");
		document.getElementById('fetch-value').innerHTML="Save "
		const paragraph = document.getElementById("edit");
	paragraph.contentEditable = true;
	 paragraph.style.backgroundColor = "#dddbdb";
	 document.getElementById('edit-button').value="Save";
	}
	else if(data=="Save")
	{
		document.getElementById('fetch-value').innerHTML="Edit "
		const paragraph = document.getElementById("edit");
		paragraph.contentEditable = false;
		paragraph.style.backgroundColor = "white";
	     document.getElementById('edit-button').value="Edit";
	}
}

