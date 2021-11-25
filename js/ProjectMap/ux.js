function go_to_task_after_creation(){
  var myElement = document.getElementById(new_task_id+'_card');
  var topPos = myElement.offsetTop;
  document.getElementById('phase_task_list_container').scrollTo({
    top: topPos - 100,
    behavior: "smooth"
  })
  // document.getElementById(new_task_id+'_card').scrollIntoView({
  //      behavior: 'smooth'
  //  });
   new_task_id = null;// on creation of new task reset variable



}

var current_story_task_id_ui = false;
var story_id_ui_scroll = false;
function go_to_story_after_creation() {
  // console.log("task",current_story_task_id_ui, " story",story_id_ui_scroll)

  if(task_view){
    // document.getElementById(story_id_ui_scroll).scrollIntoView({
    //      behavior: 'smooth'
    //  });
    task_story_dropdown = [];// refresh on any taskview or phaseview rerender, force rerender
    story_elm = []; // contains the task id,  not story elem, used to controll toggle containers
      toggle_story_container(current_story_task_id_ui)
     var myElement = document.getElementById(story_id_ui_scroll);
     var topPos = myElement.offsetTop;
     document.getElementById('task_view_ui_task_container').scrollTo({
       top: topPos - 100,
       behavior: "smooth"
     })
  }

  if(phase_view){
    console.log("task_story_dropdown",task_story_dropdown, story_elm);

    if(task_story_dropdown.includes(current_story_task_id_ui)){
      console.log("includes")
    }else{
      console.log(" story container not displaying will click to display",document.getElementById('phase_container_story_toggle'+current_story_task_id_ui))
      toggle_story_container(current_story_task_id_ui)
    }
    console.log("task_story_dropdown",task_story_dropdown);
    var myElement = document.getElementById(story_id_ui_scroll);
    var topPos = myElement.offsetTop;
    document.getElementById('phase_task_list_container').scrollTo({
      top: topPos - 100,
      behavior: "smooth"
    })


  }


   // var myElement = document.getElementById(story_id_ui_scroll);
   // var topPos = myElement.offsetTop;
   // document.getElementById(current_story_task_id_ui+'_story_container').scrollTo({
   //   top: topPos,
   //          behavior: "smooth"
   // })



  current_story_task_id_ui = false;
  story_id_ui_scroll = false;

}

function go_to_project_after_creation(new_project_id) {
  var myElement = document.getElementById(new_project_id);
  var topPos = myElement.offsetTop;
  document.getElementById('main_projects_container').scrollTo({
    top: topPos,
           behavior: "smooth"
  })

}
