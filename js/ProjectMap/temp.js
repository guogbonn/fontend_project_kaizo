var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ ],
  autolock: true, // don't move nodes around

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': function(ele){
          if (ele.data('id') in phase_unique_id  && phase_unique_id[ele.data('id')]["type"] == "sub"){ return 'white'}
          if (ele.data('id') in phase_unique_id  && ele.data('id') == current_clicked_phase_id){return 'grey'}
          return 'black' },
        'label':  function( ele ){return ele.data('label')},
        'background-image': function(ele){if(ele.data('id').includes('add_phase')){return 'https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=170667a&w=0&h=vwmBL25oWU3A26BASebi4wENUZ23pnYz9QKnBiw4EvE='}return 'none'},
        'background-fit': 'cover',
        'border-width': function(ele){
          if(ele.data('id').includes('add_phase')){return .5}
          if (ele.data('id') in phase_unique_id  && ele.data('id') == current_clicked_phase_id){return .5}
          if(ele.data('id') in phase_unique_id  && phase_unique_id[ele.data('id')]["type"] == "sub"){return 1}
        return 0},
        'width': function(ele){
          if (ele.data('id').includes("spacer")){return .1}
          return 26;
        },
        'height': function(ele){
          if (ele.data('id').includes("spacer")){
            return .1;
          }
          return 26;
        },
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],

  layout: {
    name: 'preset'
  }


});

function create_stories(stories,task_unique_id) {
  var story_list = ''

  for (var j = 0; j < stories.length; j++){

      var story_elm = `

                <div id="${stories[j][0]}" class="story">
                      <div class="task_menu">
                        <img onclick="show_modal({story_delete:${stories[j][0]},delete:true, task_clicked_on:${task_unique_id}})" height="20" width="20" src="img/ProjectMap/delete.svg">
                        <img class="task_edit_button" onclick="show_modal({ edit_story:${stories[j][0]}, task_clicked_on:${task_unique_id} })" height="20" width="20" src="img/ProjectMap/edit.svg">
                      </div>

                      <div class="status">
                        <p> <b> Task Status:</b></p>
                        <p>${story_unique_id[stories[j][0]]["Status"]}</p>
                      </div>

                      <div class="start">
                        <p><b>Start: </b> </p>
                      <p>${ui_time(convertUTCTimestampDateToLocalDate(story_unique_id[stories[j][0]]["Start"] *1000))}</p>
                    </div>

                    <div class="task_deadline">
                      <p><b>Stop: </b></p>
                      <p>${ui_time(convertUTCTimestampDateToLocalDate(story_unique_id[stories[j][0]]["Stop"] * 1000 ))}</p>
                    </div>

                    <div style="margin-top:20px" class="task_des">
                      <p><b>Story Details:</b></p>
                      <p>${story_unique_id[stories[j][0]]["story_detail"]}</p>
                    </div>
                    <div style="margin-top:20px" class="task_des">
                      <p><b>Owner:</b></p>
                      <p>${people_unique_id[story_unique_id[stories[j][0]]["Created_by"]]["name"]}</p>
                    </div>
                </div>

              `
      story_list += story_elm
      }

      return story_list;
}


function task_elm_dom_obj(
                        task_unique_id,
                        task_num,
                        task_detail,
                        status,
                        start,
                        duration,
                        deadline,
                        deliverables,
                        individuals,
                        teams,
                        stories,
                        )
  {
    var individuals_serial = '';
    for(var i = 0; i < individuals.length; i++){
      if(people_unique_id[individuals[i]]["deleted"] == "false" && people_unique_id[individuals[i]]["project_id"] == current_project_id){
        individuals_serial += `<p>${people_unique_id[individuals[i]]["name"]}</p>`;
      }
    }
  var task_elm = `<div id="${task_unique_id}_card" class="task_item">

              <div class="task_container">

                <div class="task_menu">
                  <img onclick="show_modal({task_delete :'${task_unique_id}',delete:true})" height="20" width="20" src="img/ProjectMap/delete.svg">
                  <div class="add_story" onclick="show_modal({ add_story:true, story_task_id: '${task_unique_id}'})"><p>+</p></div>
                  <img class="task_edit_button" onclick="show_modal({ edit_task: '${task_unique_id}'})" height="20" width="20" src="img/ProjectMap/edit.svg">
                </div>

                <div style="margin-top:20px" class="task_des">
                  <p><b>Task Details:</b></p>
                <!-- <p style=""> <b>Num:</b> ${task_num+1}</p> -->
                  <p>${task_detail}</p>
                </div>
                <div class="status">
                  <p> <b>Status:</b></p>
                  <p>${status}</p>
                </div>
                <div class="start">
                  <p><b>Start: </b> </p>
                <p>${ui_time(convertUTCTimestampDateToLocalDate(start *1000)) }</p>
              </div>
                <div class="dur">
                  <p><b>Duration:</b></p>
                  <p> ${ui_duration(start, deadline)}</p>
                </div>
                <div class="task_deadline">
                  <p><b>Deadline: </b></p>
                  <p>${ui_time(convertUTCTimestampDateToLocalDate(deadline *1000))}</p>
                </div>
                <div class="task_deliv">
                  <p><b>Deliverables</b></p>
                  <div class="deliverable_container">
                    <p>${deliverables}</p>
                  </div>
                </div>
                <div class="task_team_m">
                  <div class="img_list"></div>
                  <p><b>Individuals:</b> </p>
                  ${individuals_serial}
                </div>

              </div>
              <div id="phase_container_story_toggle${task_unique_id}" onclick="toggle_story_container('${task_unique_id}')" class="task_story_arrow">
                <div id="${task_unique_id}_arrow" class="task_arrow_up"></div>
              </div>
            </div>
            <div id="${task_unique_id}_story_container" class="story_container">${create_stories(stories,task_unique_id)} </div>
    `


    return task_elm;
}

function create_phase_task_ui(phase_id) {

  if(phase_id == null){ //possible on deletion of phase
    // hide phase menu
    document.getElementById('phase_card_phase_menu').style.visibility = "hidden";
    // set phase_tite
    var phase_header_title = document.getElementById('phase_name_card');

    phase_header_title.innerHTML = `<p style ="margin:1px;margin-left: 10px;font-size: 15px;"></p>`;

    var phase_container = document.getElementById('phase_task_list_container');
    phase_container.innerHTML = '<div style="margin: auto;height: 50%;font-size: x-large;"><h3> No Phase Selected</h3></div>'
    return;
  }
  // show phase menu
      document.getElementById('phase_card_phase_menu').style.visibility = "visible";

  console.log("populate phase with tasks",phase_id);

  // set phase to be the currently clicked one
  current_clicked_phase_id = phase_id;
  // populate_project_map(current_project_id,current_sub_phase)

  var task_list = phase_unique_id[phase_id]["tasks"];
  // set phase_tite
  var phase_header_title = document.getElementById('phase_name_card');
  var phase_name = phase_unique_id[phase_id]["name"];
  phase_header_title.innerHTML = `${phase_name}  <p style ="margin:1px;margin-left: 10px;font-size: 15px;">Task Count: ${phase_unique_id[current_clicked_phase_id]["tasks"].length} </p>`;
  var task_list_html = '';
  for( var i = 0; i < task_list.length; i++){
    var task = task_unique_id[task_list[i][0]];
    task_list_html += task_elm_dom_obj(
      task_list[i][0], //id
      i, // task num
      task["task_detail"],
      task["Status"],
      task["Start"],
      task["Duration"],
      task["Deadline"],
      task["Deliverables"],
      task["Individuals"],
      task["Teams"],
      task["Stories"]
    )

  }
  var phase_container = document.getElementById('phase_task_list_container');
  if (task_list.length ==0){
    phase_container.innerHTML = '<div style="margin: auto;height: 50%;font-size: x-large;"><h3> No Tasks</h3></div>'
  }else{
    phase_container.innerHTML = task_list_html;

  }
}


function create_task_view_ui(on = false) {
  // check if project has poople
  var is_people = false;
  for(const person in people_unique_id){
    if(people_unique_id[person]["project_id"] == current_project_id){
      is_people = true;
    }
  }
    if(!(is_people) ){
      error_modal("<b>Error:</b> Create a Person to assign a task too.");
    }

  if(!on || !(is_people) ){
    //get rid of task count
    document.getElementById('task_view_ui_task_count').innerHTML = "";
    // get rid of memeber menue
    document.getElementById('task_view_ui_member_menu').innerHTML = "";
    // set div to empty
    var task_view_container = document.getElementById('task_view_ui_task_container');
    task_view_container.innerHTML = `
   <div  class="phase_view"><h3>Task View</h3></div>

    <div style="margin: auto;height: 50%;font-size: x-large;"><h3> No Tasks available </h3></div>`
    return;
  }

  // populate member menu
  var member_elms = ""
  for(const  person in people_unique_id){
    if(people_unique_id[person]["project_id"] == current_project_id && people_unique_id[person]["deleted"] == "false"){
      var member_elm = `
      <div class="team_member_task_option" person_id="${person}">
      ${  people_unique_id[person]["name"]}
      </div>
      `
      member_elms += member_elm
    }
  }
  document.getElementById('task_view_ui_member_menu').innerHTML = member_elms

  // add class event listener to member tags
  var element = document.getElementsByClassName('team_member_task_option');
  for(var i=0;i<element.length;i++){
     element[i].addEventListener("click", function(e){
         var clicked_person_id = e.target.getAttribute("person_id");
         populate_tasks_for_person(clicked_person_id);
     }, false);
   }

  return;

}

function populate_tasks_for_person(person_id) {
  document.getElementById('phase_card_phase_menu').style.visibility = "visible";
  var tasks_container = ""
  console.log("populate task view with tasks tasks for",people_unique_id[person_id]["name"]);


  // populate task list with user tasks
  var task_list =[];

  for(const q_task in  task_unique_id){

    for(var i =0; i < task_unique_id[q_task]["Individuals"].length; i++){
      if(person_id == task_unique_id[q_task]["Individuals"][i]){
        task_list.push([q_task, task_unique_id[q_task]["Start"] ]);
      }
    }
  }

  console.log(task_list);
  // sort tasks on start
  var task_list = task_list.sort(function(a, b) {
  return b[1] - a[1];
});


  // set phase_tite
  var task_view_header_title = document.getElementById('task_view_ui_task_count');
  task_view_header_title.innerHTML = ` <p style ="margin:1px;margin-left: 10px;font-size: 15px;">Task Count: ${task_list.length} </p>`;
  var task_list_html = '';
  for( var i = 0; i < task_list.length; i++){
    var task = task_unique_id[task_list[i][0]];
    task_list_html += task_elm_dom_obj(
      task_list[i][0], //id
      i, // task num
      task["task_detail"],
      task["Status"],
      task["Start"],
      task["Duration"],
      task["Deadline"],
      task["Deliverables"],
      task["Individuals"],
      task["Teams"],
      task["Stories"]
    )

  }
  //task_view_ui_task_container
  var task_view_container = document.getElementById('task_view_ui_task_container');
  if (task_list.length ==0){
    task_view_container.innerHTML = '<div style="margin: auto;height: 50%;font-size: x-large;"><h3> No Tasks</h3></div>'
  }else{
    task_view_container.innerHTML = task_list_html;

  }

}




var navigation_stack = []; // clear navigation stack when swithing to a new project
var current_sub_phase = null;
var phase_index_to_add = null;
function populate_project_map(curr_poj,sub_ph_id = null) {

  if(curr_poj == null){
    //set the project title empty
    document.getElementById('project_scheme_title').innerHTML = "";
    cy.remove(cy.nodes());

    return;
  }

  // add current positon to stack on page load
  if(navigation_stack.length == 0){
    navigation_stack.push([curr_poj,sub_ph_id]);
  }
  //do not add the same subphase twice in a row
  if(navigation_stack.length != 0 && sub_ph_id != null  && navigation_stack[navigation_stack.length -1][1]!= sub_ph_id ){
    navigation_stack.push([curr_poj,sub_ph_id]);
  }

  console.log("navigation stack ",navigation_stack)
  var nav_title = ''; // var for nav title
  //get the last item in stack
  for(var i = 0; i < navigation_stack.length; i++){
    if(i == 0 && navigation_stack[i][1] == null){
      nav_title =  project_unique_id[navigation_stack[i][0]]["name"];
      document.getElementById('project_scheme_back').style.visibility = 'hidden';
      document.getElementById('subphase_delete').style.visibility = 'hidden';

    }else if(navigation_stack[i][1] != null){
      nav_title  = phase_unique_id[navigation_stack[i][1]]["name"];
      document.getElementById('project_scheme_back').style.visibility = 'visible';
      document.getElementById('subphase_delete').style.visibility = 'visible';

    }
  }
  document.getElementById('project_scheme_title').innerHTML = nav_title;
// select the phase group list
  if (sub_ph_id !=null ){
    var map = project_schemes[current_project_id][sub_ph_id];
    current_sub_phase = sub_ph_id;
  }else{
    var map = project_schemes[current_project_id]["begin"];
  }

  var node_list = []; // nodes list array to populate cy api

  node_list.push({ group: 'nodes', data: { id: 'begin_', label: 'Begin'},position: { x: 0, y: 0 }})
  node_list.push({group: 'edges',data: { id: 'begin_beg_space', source: 'begin_', target: 'begin_spacer' }})
  node_list.push({ group: 'nodes', data: { id: 'begin_spacer', label: ''},position: { x: 80, y: 0 }})

  // remove add phase from beginning if there are no phases - end already has it no need
  if(map.length > 0){
    node_list.push({ group: 'nodes', data: { id: 'add_phase_'+(300000).toString(), label: '', pos:.5}, position: { x: 160, y:  0 + 20}   })

  }


  // begin -> spce -> spcr > phase -> spacer -> end
  var prev_space_id = 'begin_spacer';
  var x_spacer_count = 0;
  // for phase group in phase group list
  for (var i = 0; i < map.length; i++) {
    var k = 0; // var to ensure to nodes have same absolute value on even count
    var l = 1; // to ensure to nodes have same absolute value on odd count
    // for phase  in phase group
    node_list.push({ group: 'edges', data: { id: i.toString() + 'start_edge_spacer_edge' , source:prev_space_id , target: 'spacer_start'+x_spacer_count.toString() } })
    node_list.push({ group: 'nodes', data: { id: 'spacer_start'+x_spacer_count.toString(), label: ''}, position: { x: x_spacer_count *400 + 320, y:  0}   })
    if(i == map.length -1){
      // for the inbetween phase group do not add a add phase right before end
    }else{
      // add a "add phase button inbetween"
      node_list.push({ group: 'nodes', data: { id: 'add_phase_'+(x_spacer_count+0.5).toString(), label: '', pos:x_spacer_count+1.5}, position: { x: x_spacer_count *400 + 600, y:  0 + 20}   })

    }
    prev_space_id = 'spacer_start'+x_spacer_count.toString();

    var min_y = 0;
    for(var j = 0; j < map[i].length; j++){
      // var for setting the add phase node underneath phase group
      // when the phase group has an even count of phases
      if(map[i].length % 2 == 0){

        // plot even nodes to split the horizontal line
        if( j  % 2 == 0){
          // console.log("even height",(k * 100) + 50)
          // link prev spacer to current phase
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'prev_spacer_edge' + i.toString() + j.toString(), source:prev_space_id , target: map[i][j][0] } })
          // create current phase node
          node_list.push({ group: 'nodes', data: { id: map[i][j][0], label: phase_unique_id[map[i][j][0]]["name"]}, position: { x: x_spacer_count *400 + 400, y:  (k * 100) + 50}    })
          min_y = Math.max(min_y,(k * 100) + 50);
          // create link to next spacer
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: map[i][j][0], target: 'spacer'+x_spacer_count.toString() } })

        }else{
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'prev_spacer_edge' + i.toString() + j.toString(), source:prev_space_id , target: map[i][j][0] } })

          node_list.push({ group: 'nodes', data: { id: map[i][j][0], label: phase_unique_id[map[i][j][0]]["name"]}, position: { x: x_spacer_count *400 + 400, y:  (k * -100) - 50}   })

          // console.log("even odd height",(k * -100) - 50)
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: map[i][j][0], target: 'spacer'+x_spacer_count.toString() } })

          k += 1
        }

      }else {
        // plot odd nodes where the first one is on the line then each two following should be equal distance away from line in positive and negative directions
        if( j == 0){
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'prev_spacer_edge' + i.toString() + j.toString(), source:prev_space_id , target: map[i][j][0] } })
          node_list.push({ group: 'nodes', data: { id: map[i][j][0], label: phase_unique_id[map[i][j][0]]["name"]}, position: { x: x_spacer_count *400 + 400, y:  0}    })
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: map[i][j][0], target: 'spacer'+x_spacer_count.toString() } })

        }else if ( j  % 2 == 0) {
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'prev_spacer_edge' + i.toString() + j.toString(), source:prev_space_id , target: map[i][j][0] } })
          node_list.push({ group: 'nodes', data: { id: map[i][j][0], label: phase_unique_id[map[i][j][0]]["name"]}, position: { x: x_spacer_count *400 + 400, y:   l * 100}   })
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: map[i][j][0], target: 'spacer'+x_spacer_count.toString() } })
          min_y = Math.max(min_y, l * 100);
          l += 1
        }{
          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'prev_spacer_edge' + i.toString() + j.toString(), source:prev_space_id , target: map[i][j][0] } })
          node_list.push({ group: 'nodes', data: { id: map[i][j][0], label: phase_unique_id[map[i][j][0]]["name"]}, position: { x: x_spacer_count *400 + 400, y:  l * -100}   })

          node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: map[i][j][0], target: 'spacer'+x_spacer_count.toString() } })

        }
      }

    }
    var date_range = get_phase_group_date_range(map[i]);
    // add phase plus button underneath phase groupm- pos here does not actually need to add one
    node_list.push({ group: 'nodes', data: { id: 'add_phase_'+x_spacer_count.toString(), label: `${date_range}`, pos:x_spacer_count+1}, position: { x: x_spacer_count *400 + 400, y:  min_y + 80}   })


    if(i == map.length-1){
      // when we reached the end of the phase group list add an end node with a phase adder
      node_list.push({ group: 'nodes', data: { id: 'add_phase_'+(x_spacer_count+1).toString(), label: '', pos:x_spacer_count+1.5}, position: { x: x_spacer_count *400 + 620, y:  0 + 20}   })
      node_list.push({ group: 'nodes', data: { id: 'end'+x_spacer_count.toString(), label: 'End'}, position: { x: x_spacer_count *400 + 720, y:  0}   })
      node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge' + i.toString() + j.toString(), source: 'spacer'+x_spacer_count.toString(), target: 'end'+x_spacer_count.toString() } })

    }
        node_list.push({ group: 'nodes', data: { id: 'spacer'+x_spacer_count.toString(), label: ''}, position: { x: x_spacer_count *400 + 480, y:  0}   })
        prev_space_id = 'spacer'+x_spacer_count.toString();
        x_spacer_count += 1

  }
  // add end to the map if there is no phases to be added
  if (map.length == 0){
    node_list.push({ group: 'nodes', data: { id: 'add_phase_'+(x_spacer_count+1).toString(), label: '', pos: .5 }, position: { x: 120 , y:  0 + 20}   })
    node_list.push({ group: 'nodes', data: { id: 'end'+x_spacer_count.toString(), label: 'End'}, position: { x: 240, y:  0}   })
    node_list.push({ group: 'edges', data: { id: x_spacer_count.toString() + 'spacer_edge', source: 'begin_spacer', target: 'end'+x_spacer_count.toString() } })

  }
  // populate map

  /// have a stack datastuture of the subphase tasks allow you to go back up

  // on the click of a project subphase card replace stack with dfs
  cy.add(node_list);

  cy.animate({
  fit: {
    eles: cy.nodes(),
    padding: 50
  }
}, {
  duration: 250
});

  cy.on('tap', 'node', function(evt,sub_ph_id){
    var node = evt.target;
    console.log( node.data());
    // the id is a phase id
    if(node.id()in phase_unique_id){
      // the phase id has associatiated tasks
        if( phase_unique_id[node.id()]["type"] == "real"){
          current_clicked_phase_id = node.id();
          pre_pop_setup();
          populate_project_map(curr_poj,current_sub_phase);
          create_phase_task_ui(node.id());
        }else {
        // phase is a sub phase
          console.log("sub phase");
          pre_pop_setup();
          populate_project_map(curr_poj,node.id())
        }
    }
    if(node.id().includes("add_phase_")){

      console.log(typeof node.data().pos);
      var n = node.data().pos;
      phase_index_to_add = n;
      show_modal({add_phase: true})
    }
});
}

function pop_nav_stack() {
  navigation_stack.pop();
  var back = navigation_stack[navigation_stack.length-1];
  console.log(back);
  navigation_stack.pop();

  pre_pop_setup();
  current_sub_phase = back[1];
  populate_project_map(back[0],back[1]);

}





function close_error_modal(e){
  e.style.visibility = 'hidden';
}

function error_modal(error_message){
  // pass color of text
  // pass backgroundColor
  var modal_error_alert_id = "modal_error_alert";
  var error_message_id = "modal_error_alert_error_message";
  document.getElementById(error_message_id).innerHTML = error_message;
  document.getElementById(modal_error_alert_id).style.visibility = "visible";

}


function sub_phase_bubble_ui() {
  // breadth first search
}

function populate_people_ui(){

  var people_html = "";
  var people_card_elm = '';

    for (const property in people_unique_id) {
      console.log(people_unique_id[property]["name"])
      // print people who are not deleted
      if(people_unique_id[property]["deleted"] == "false" && people_unique_id[property]["project_id"] == current_project_id){
        people_card_elm = `<div class="person_card" onclick="show_modal({people_edit:'${property}'})">
                        <div class="person_id">
                          <p>${initials(people_unique_id[property]["name"])}</p>
                        </div>
                        <p style="
                          width: 50%;
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          ">
                          ${people_unique_id[property]["name"]}
                        </p>
                      </div>`
            people_html += people_card_elm;
      }

    }


    document.getElementById('person_container_elm').innerHTML = people_html;
}




function populate_teams_ui(){

  var team_html = "";
  var team_card_elm = "";

    for (const property in team_unique_id) {

      if(team_unique_id[property]["deleted"] == "false" && team_unique_id[property]["project_id"] == current_project_id){

          console.log(team_unique_id[property]["name"])
        team_card_elm = `<div onclick="show_modal({team_edit:'${property}'})" class="person_card">
                        <div class="person_id">
                          <p>${initials(team_unique_id[property]["name"])}</p>
                        </div>
                        <p style="
                          width: 50%;
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          ">
                          ${team_unique_id[property]["name"]}
                        </p>
                      </div>`
            team_html += team_card_elm;
      }


    }



      document.getElementById('team_container_elm').innerHTML = team_html;


}

;


function create_sub_phase_elm(project_id){

  var subphase_res = ""

  for(const prop in project_schemes[project_id]){
    if (prop != "begin"){

      var sub_phase_elm =
      `
        <div onclick="subphase_click_ui({phase_id:'${prop}',project_id:'${project_id}'})" class="project_sub_phase_item">
          <p style="
          width: 50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          " >${project_initals(phase_unique_id[prop]["name"]) }</p>
        </div>
      `
      subphase_res += sub_phase_elm
    }

  }

  var sub_phase_container = `<div id="${project_id}_project_sub_phase_container" class="project_sub_phase_container">${subphase_res}</div>`


  return sub_phase_container;
}

function main_projects_ui() {
  var main_projects_container = "";

    for(const project_id in project_schemes){
      if(project_unique_id[project_id]["shared"] == "false" && project_unique_id[project_id]["deleted"] == "false"){

        var project_elm = `
                    <div id="${project_id}_project_card"  class="project_card">
                    <div  onclick="toggle_project_sub_phase_container('${project_id}')" class="project_arrow_container">
                      <div id ="${project_id}_arrow" class="arrow-up"></div>
                    </div>
                    <p onclick="change_project_ui('${project_id}')"  style="
                      width: 50%;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;

                      ">${ project_initals(project_unique_id[project_id]["name"])  }</p>
                    <div onclick="show_modal({edit_project:'${project_id}'})" class="project_id">
                      <img height="30px" src="img/ProjectMap/settings.svg" alt="">
                    </div>
                  </div>
                  `
          var subphase_elms = create_sub_phase_elm(project_id);
          main_projects_container += project_elm +subphase_elms;
      }

    }
    document.getElementById('main_projects_container').innerHTML = main_projects_container;

}

function shared_projects_ui() {
  var main_projects_container = "";

    for(const project_id in project_schemes){
      if(project_unique_id[project_id]["shared"] == "true" && project_unique_id[project_id]["deleted"] == "false"){

        var project_elm = `
                    <div id="${project_id}_project_card"  class="project_card">
                    <div  onclick="toggle_project_sub_phase_container('${project_id}')" class="project_arrow_container">
                      <div id ="${project_id}_arrow" class="arrow-up"></div>
                    </div>
                    <p onclick="change_project_ui('${project_id}')"  style="
                      width: 50%;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;

                      ">${ project_initals(project_unique_id[project_id]["name"])  }</p>
                    <div onclick="show_modal({edit_project:'${project_id}'})" class="project_id">
                      <img height="30px" src="img/ProjectMap/settings.svg" alt="">
                    </div>
                  </div>
                  `
          var subphase_elms = create_sub_phase_elm(project_id);
          main_projects_container += project_elm +subphase_elms;
      }

    }
    document.getElementById('shared_project_container').innerHTML = main_projects_container;

}


function change_project_ui(current_proj_id) {

  close_modal()
  current_clicked_phase_id = null;
  navigation_stack = []; // clear navigation stack when swithing to a new project
  current_sub_phase = null;
  phase_index_to_add = null;
  current_project_id = current_proj_id;
  populate_people_ui();
  populate_teams_ui();
  // main_projects_ui();
  pre_pop_setup();
  populate_project_map(current_project_id);
  create_phase_task_ui(null);
  create_task_view_ui(on = false);
  // generate task view

}

function subphase_click_ui(options) {
  // phase_id:'${prop}',project_id:'${project_id}'
  if(options.project_id != current_project_id){
      change_project_ui(options.project_id )
      pre_pop_setup();
      populate_project_map(current_project_id,options.phase_id)
  }else{
    pre_pop_setup();
    populate_project_map(current_project_id,options.phase_id)
  }
}





function startup(){
  // replace with first phase group, first phase
  create_phase_task_ui(null);
  pre_pop_setup();
  populate_project_map(current_project_id);
  populate_people_ui();
  populate_teams_ui();
  main_projects_ui();
  shared_projects_ui();
  create_task_view_ui(on = false);
}
startup();

//.addEventListener("click", function(){alert('clicked')}, false);

//   var element= document.getElementsByClassName('classname');
//   for(var i=0;i<element.length;i++){
//      element[i].addEventListener("click", function(){alert('clicked')}, false);
// }
