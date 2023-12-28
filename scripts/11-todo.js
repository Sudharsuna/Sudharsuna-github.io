const todo=[];

let todoHTML ='';

for(let i=0; i<todo.length; i++){
  const out = todo[i];
  const html=`<p>${out}</p>`
  todoHTNL += html;
}
document.querySelector('.todolis')
.innerHTML = todoHTML;

function add(){
  const inputs= document.querySelector('.in');
   const name =inputs.value;

  todo.push(name);
  console.log(todo);
  inputElement.value='';
}