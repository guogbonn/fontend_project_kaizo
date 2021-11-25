
// var user_people = ["891893", "909023","9849083","238493","78328","982730298","123456"]


var project_schemes = {
  // oct 5 - 8
  // project id
      //project_timeline: [parllel phase group], [parallel phase group]
      //project_sub phase: [parallel phase group]
  // subphase should never be a clicked phase
  "project_id":{"begin":[ [["2795553578",1633395815,1633659836],["6387779",1633395815,1633680001]],[["893n9392",null,null],["797397",1633690081,1633700161]],[[ 'iounwe921',null,null]],[["809283083",1633720221,1633720321]] ], // phase created no tasks assigned yet
                    "797397":[ [["094483207",1633690081,1633690151]],[["236578911",1633690851,1633700161]] ],
                    "893n9392":[  ],
                    "809283083":[ [["832kj8934",1633720221,1633720321]] ],
  },
  "project_id_second_project":{"begin":[ [["2795553578",1633395815,1633659836],["6387779",1633395815,1633680001]],[["893n9392",null,null],["797397",1633690081,1633700161]],[[ 'iounwe921',null,null]],[["809283083",1633720221,1633720321]] ], // phase created no tasks assigned yet
                    "797397":[ [["094483207",1633690081,1633690151]],[["236578911",1633690851,1633700161]] ],
                    "893n9392":[  ],
                    "809283083":[ [["832kj8934",1633720221,1633720321]] ],
  }

}
var current_project_id = null;
for( const project_id in project_schemes){
  current_project_id = project_id;
  break;
}




var project_unique_id = {
  "project_id":{"name": "Main Project","shared":"false","deleted":"false", "status":"pause", "alert":7, "project_owner":"server_id"},
  "project_id_second_project":{"name": "Second Project","shared":"false","deleted":"false", "status":"pause","alert":7,"project_owner":"server_id"}
}

var phase_unique_id = {                                                              //tasks are oredered
  "2795553578":{"name": "Identify & meet with Stake Holders","type":"real","time_range":[1633395815,1633405895],"phase_group_index":0, "tasks":[["23098409257",1633395815,1633405895],["9483347028",1633405898,1633415978],["823098",1633415980,1633659836]]},
  "6387779":{"name": "Set and Proritize Goals","type":"real","time_range":[1633395815,1633680001], "phase_group_index":0,"tasks":[["90392039085",1633395815,1633680001]]},
  "797397":{"name": "Define Deliverables","type":"sub","time_range":[1633690081,1633700161],"phase_group_index":1,"tasks":[]},
  "893n9392":{"name": "Define Hyper","type":"sub","time_range":[1633690081,1633700161],"phase_group_index":1,"tasks":[]},
  "094483207":{"name": "Create the Project Schedule","type":"real","time_range":[1633690081,1633690151],"phase_group_index":1, "tasks":[["jlj984987839",1633690081,1633690151]]},
  "0944832078dj":{"name": "Create the Terminal","type":"real","time_range":[1633690081,1633690151], "phase_group_index":1, "tasks":[["jlj984987839",1633690081,1633690151]]},
  "236578911":{"name": "Identify Issues and Complete a Risk Assessment","type":"real","time_range":[1633690851,1633700161],"phase_group_index":1, "tasks":[["skdj7281t2",1633690851,1633700161]]},
  "236578911dfd":{"name": "Identify Issues and Complete a Risk Assessment","type":"real","time_range":[1633690851,1633700161], "phase_group_index":1,"tasks":[["skdj7281t2",1633690851,1633700161]]},
  "809283083":{"name": "Identify Issues and Complete a Risk Assessment","type":"sub","time_range":[1633710241,1633720321],"phase_group_index":3, "tasks":[]},
  "iounwe921":{"name": "Develop Product Phase","type":"real","time_range":[null,null],"phase_group_index":2, "tasks":[ ]},
  "832kj8934":{"name": "Identify Issues and Complete a Risk Assessment","type":"real","time_range":[1633720221,1633720321], "phase_group_index":3,"tasks":[["832kj89340",1633720221,1633720321]]},

  // "dcbiub12":{"name": "New","type":"real","time_range":[1633710241,1633720321], "phase_group_index":3,"tasks":[["832kj89340",1633710241,1633720321]]},
};
var task_unique_id = {
  "23098409257":{"task_detail":"pick out closed books",
                 "Status":"Pending",
                 "Start": 1633395815,
                 "Duration": "",
                 "Deadline": 1633405895,
                 "Deliverables": "Google Doc",
                 "Individuals": ["891893"],
                 "Teams": [],
                 "Stories": [["90909234",1633415980],["3224945548",1633415980]]
               },
  "9483347028":{"task_detail":"Return closed books",
                  "Status":"Pending",
                  "Start": 1633405898,
                  "Duration": "",
                  "Deadline": 1633415978,
                  "Deliverables": "Google Doc",
                  "Individuals": ["891893"],
                  "Teams": ["3709280"],
                  "Stories": []
                },
  "823098":{"task_detail":"Finish Projets books",
                 "Status":"Pending",
                 "Start": 1633415980,
                 "Duration": "",
                 "Deadline": 1633659836,
                 "Deliverables": "Google Doc",
                 "Individuals": ["891893"],
                 "Teams": ["3709280"],
                 "Stories": []
               },
  "90392039085":{"task_detail":"Start Project Layout ",
                 "Status":"Pending",
                 "Start": 1633395815,
                 "Duration": "",
                 "Deadline": 1633680001,
                 "Deliverables": "Project layout",
                 "Individuals": ["891893"],
                 "Teams": ["3709280"],
                 "Stories": []
               },
  "jlj984987839":{"task_detail":" Start Cold Calling  ",
                  "Status":"Pending",
                  "Start": 1633690081,
                  "Duration": "",
                  "Deadline": 1633690151,
                  "Deliverables": "Project layout",
                  "Individuals": ["891893"],
                  "Teams": ["3709280"],
                  "Stories": []
                },
  "skdj7281t2":{"task_detail":"Send emails   ",
                 "Status":"Pending",
                 "Start": 1633690851,
                 "Duration": "",
                 "Deadline": 1633700161,
                 "Deliverables": "Project layout",
                 "Individuals": ["891893"],
                 "Teams": ["3709280"],
                 "Stories": []
               },
  "832kj89340":{"task_detail":"Develop Product  ",
                  "Status":"Pending",
                  "Start": 1633720221,
                  "Duration": "",
                  "Deadline": 1633720321,
                  "Deliverables": "Project layout",
                  "Individuals": ["891893"],
                  "Teams": ["3709280"],
                  "Stories": []
                }
};
var story_unique_id = {

  "90909234":{"story_detail":"Finish Projets books",
                 "Status":"Pending",
                 "Start": 1633415980,
                 "Duration": 10080,
                 "Stop": 1633426060,
                 "Created_by": "891893",
              },
  "3224945548":{"story_detail":"Worked hard on stuff",
                 "Status":"In the works",
                 "Start": 1633415980,
                 "Duration": 10080,
                 "Stop": 1633426060,
                 "Created_by": "891893",

              },
};


var team_unique_id = {
  // Teams
  "4890923":{"name": "Red Team","deleted":"false", "project_id":"project_id"},
  "3709280":{"name": "Green Team","deleted":"false", "project_id":"project_id"},
  "98732943":{"name": "Blue Team ","deleted":"false", "project_id":"project_id"},
};
var user_teams = {"4890923":["891893","909023","9849083"],
                  "3709280":["238493","78328"],
                  "98732943": ["982730298","123456"]
                  }
var people_unique_id = {
  //members
  //permissionbits create phase, create task, create story
  "891893":{"name":"red herring the third", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"000","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
  "909023":{"name": "Time Har", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
  "9849083":{"name": "Rancy Heis", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
  "238493":{"name": "Righ hIle", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
  "78328":{"name": "Travis Scott", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"server_id"},
  "982730298":{"name": "Lamar Jackson", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
  "123456":{"name": "Tamar Brzs", "email": "ogbonnaya@gmail.com","deleted":"false", "project_id":"project_id","permission_bits":"111","alert_settings":{"project_id":"0111111","project_id_second_project":"0111111"},"server_id":"23232"},
};



var task_action = null; // read and writhe when we create or edit a task

var current_clicked_phase_id = null; // written when phase node is clicked// subphase must never be the clicked phase will always be first phase in the subphase phase_group_list

var equivlent_sec = {"sec":1, "min":60, "hour":3600,"day":86400,"week":604800}
var month = {"january":"01", "jan":"01", "february":"02", "feb":"02", "march": "03", "mar": "03", "april":"04", "apr":"04", "may":"05", "june":"06", "jun":"06", "july":"07", "jul":"07", "august":"08", "aug":"08", "september":"09", "sep":"09", "october":"10", "oct":"10", "november": "11", "nov": "11", "december":"12", "dec":"12"}
var hour_am_pm_dict = {"00":"am", "01":"am", "02":"am", "03":"am", "04":"am", "05":"am", "06":"am", "07":"am", "08":"am", "09":"am", "10":"am", "11":"am", "12":"pm", "13":"pm", "14":"pm", "15":"pm", "16":"pm", "17":"pm", "18":"pm", "19":"pm" ,"20":"pm" ,"21":"pm", "22":"pm", "23":"pm" }; //0–23
var hour_conv_dict = {"10":"10","11":"11","12":"12","00":"12", "13":"1", "14":"2", "15":"3", "16":"4", "17":"5", "18":"6", "19":"7", "20":"8", "21":"9", "22":"10", "23":"11"}
var current_user = "78328";
var user_server_id = "server_id"
function status_option_generation(){
  var status = ["Upcoming", "On Track", "Off Track","Backlogged","Completed"];
  var res = ''
  console.log(status)
  for (var i = 0; i < status.length; i++) {

    res += `<option value="${status[i]}">${status[i]}</option>`;
  }
  document.getElementById('story_status_options').innerHTML = res;
}

//////////////////////


function find_prev_phase_with_task(phase_list,result,current_project_id) {
  console.log("find_prev_phase_with_task",phase_list,result)
  // create ordered list of phase ids of the current project
  //    var phase_list = project_schemes[current_project_id]["begin"];

  for (var i = 0; i < phase_list.length; i++){
    for(var j = 0; j < phase_list[i].length; j++){
      // possibly could break here because we do not check if phase_list has an j index
      console.log(phase_unique_id[phase_list[i][j][0]]["tasks"],phase_list[i][j][0])
      if( phase_unique_id[phase_list[i][j][0]]["tasks"].length > 0  || phase_list[i][j][0] == current_clicked_phase_id){
        console.log("find_prev_phase_with_task","\n adding phase_id",phase_list[i][j][0])
        result.push(phase_list[i][j][0])
      }
      if(phase_list[i][j][0] in project_schemes[current_project_id] ){
        find_prev_phase_with_task(project_schemes[current_project_id][phase_list[i][j][0]],result,current_project_id)
      }
    }
  }
}



function set_task_start_time(digit,unit) {

  //get last task and set current task time to be one sec after prev task

        console.log("set_task_start_time",digit,unit);
        var end_time_index = 2; //

        var phase_tasks = phase_unique_id[current_clicked_phase_id]["tasks"];
        if (phase_tasks.length > 0 ){
          console.log("modal_create_task","task start time set on current phase last task")
          // set time
          var last_phase_task = phase_tasks[phase_tasks.length -1];
          var last_phase_task_end_time = last_phase_task[end_time_index];
          var new_task_start_time = last_phase_task_end_time + (digit * equivlent_sec[unit]);
        }else{
          var result = [];
          var phase_list = project_schemes[current_project_id]["begin"];
          find_prev_phase_with_task(phase_list,result,current_project_id);

          if(result.length > 0 ){
              // get last phase from ordered phase list of id
              var prev_phase_index = result.indexOf(current_clicked_phase_id) - 1;
              if (prev_phase_index >= 0 ){
                var prev_phase_id = result[prev_phase_index];
              }else{
                prev_phase_id = null;
              }
              console.log("modal_create_task","phase list and current phase",result,current_clicked_phase_id)
          }
          if (prev_phase_id == null){
            console.log("modal_create_task","task start time set - first task in newly created project")
            //set time
            last_phase_task_end_time = Math.floor((new Date()).getTime() / 1000)
            var new_task_start_time = last_phase_task_end_time + (digit * equivlent_sec[unit]) ;
          }else {
            //set time
            console.log("modal_create_task","task start time set based on previous project")
            var phase_tasks = phase_unique_id[prev_phase_id]["tasks"];
            var last_phase_task = phase_tasks[phase_tasks.length -1];
            var last_phase_task_end_time = last_phase_task[end_time_index];
            var new_task_start_time = last_phase_task_end_time + (digit * equivlent_sec[unit]);

          }
        }
        console.log("modal_create_task","final start",last_phase_task_end_time,new_task_start_time);
        //set task start time
        return new_task_start_time
}


function couple_duration_deadline(option) {

  //what is option?
  //need a start time
  if (new_task_start_time){
    // get duration
    var task_duration_time_digit_id = "task_duration_time_digit";
    var task_duration_time_unit_id = "task_duration_time_unit";
    var task_duration_time_digit_elem = document.getElementById(task_duration_time_digit_id);
    var task_duration_time_unit_elm = document.getElementById(task_duration_time_unit_id);
    // get deadline
    var task_deadline_date_id = "task_deadline_date";
    var task_deadline_time_id = "task_deadline_time";
    var task_deadline_date_elm = document.getElementById(task_deadline_date_id);
    var task_deadline_time_elm = document.getElementById(task_deadline_time_id);

    if (option == "duration"){
      console.log("couple_duration_deadline","set end of task on duration")
      //duration add time to start time and set new sum to deadline time
      var digit = task_duration_time_digit_elem.value;
      if (digit == "") digit = 1;

      var unit = task_duration_time_unit_elm.value;
      var addition_time = parseInt(digit) * parseInt(equivlent_sec[unit]);
      // set duration and deadline variables
      new_task_duration_result = digit + " " + unit +"(s)";
      new_task_deadline_result = new_task_start_time + addition_time
      // update deadline ui
      var time_string = convertUTCTimestampDateToLocalDate(new_task_start_time * 1000)
      console.log("start time ",time_string)
      var time_string = convertUTCTimestampDateToLocalDate(new_task_deadline_result *1000)
      console.log("end time ",time_string)

      var time_arr = time_string.split(" ");
      console.log(time_arr)


      var dead_line_month = month[time_arr[2].toLowerCase()]
      var dead_line_day = time_arr[1]
      var dead_line_year = time_arr[3]

      var dead_line_hour = time_arr[4].split(":")[0]
      var dead_line_min = time_arr[4].split(":")[1]


      task_deadline_time_elm.value = dead_line_hour + ':' + dead_line_min
      task_deadline_date_elm.value = dead_line_year + '-'+dead_line_month + '-' + dead_line_day

    }
    if(option == "deadline"){
      console.log("couple_duration_deadline","set end of task on deadline")
      //deadline is picked find diff make sure deadline is ahead of start time
      // find diff between deadline and start time set duration to diff
    }
    console.log("couple_duration_deadline","option",option,task_duration_time_digit_elem.value,task_duration_time_unit_elm.value,
  task_deadline_date_elm.value, task_deadline_time_elm.value)

  }
}

function convert_user_time_to_utc(date,time){
  // used for custom user time
  /// date
  var task_start_date = date; //task_start_date_elm.value
  var regexpSize = /([0-9]+)-([0-9]+)-([0-9]+)/;
  var match = task_start_date.match(regexpSize);
  /// time
  if ( time == ""){
    //user did not give time pick default time
    time = "00:00" //task_start_time_elm.value
  }
  var task_start_time_ = time;
  var regexpSize_ = /([0-9]+):([0-9]+)/;
  var match_ = task_start_time_.match(regexpSize_);
  //month is from 0 - 11 so subraction is needed ---- Date.UTC(year, month, day, hour, minute)
  var d1 = Date.UTC(parseInt(match[1]),parseInt(match[2])-1,parseInt(match[3]),parseInt(match_[1] ),parseInt(match_[2]));

  console.log("convert_user_time_to_utc",`${match[1]}  ${match[2] -1 } ${match[3]}  ${match_[1]} ${match_[2]}`);
  var d2 = convertUTCtimestamptoTimezoneAwareUTC(d1);
  // convertUTCTimestampDateToLocalDate(d1);
  return d2/1000; //store everything as utc seconds
}


function set_start_time_on_change(){
  //get task start time //
  var immidiatley_start_task_id = "immi_start_task_switch";
  var start_after_set_time_id = "time_after_prev_task_switch";
  var custom_start_id = "custom_start_switch";

  // start switches
  var immi_start_elm = document.getElementById(immidiatley_start_task_id);
  var spacer_start_elm = document.getElementById(start_after_set_time_id);
  var custom_start_elm = document.getElementById(custom_start_id);


  if (immi_start_elm.checked){ // switch is selected
    //get last task and set current task time to be one sec after prev task
          console.log("modal_create_task","immideate");
          new_task_start_time = set_task_start_time(65,"sec");
  }

  if (spacer_start_elm.checked){ // switch is selected
    console.log("modal_create_task","spacer")
    // get elm input for digit and unit
    var start_after_set_time_input_id = "time_after_prev_task_input";
    var start_after_set_time_input_unit_id = "time_after_prev_task_input_unit";
    var spacer_start_input_elm = document.getElementById(start_after_set_time_input_id);
    var spacer_start_input_unit_elm = document.getElementById(start_after_set_time_input_unit_id);

    // spacer time must be  1 or greater
    if (spacer_start_input_elm.value < 1) spacer_start_input_elm.value = 1;
    new_task_start_time = set_task_start_time(spacer_start_input_elm.value,spacer_start_input_unit_elm.value);

  }

  if(custom_start_elm.checked){ // switch is selected
    console.log("modal_create_task","custom");
    var task_start_date_id = "custom_task_start_date";
    var task_start_time_id = "custom_task_start_time";
    var task_start_date_elm = document.getElementById(task_start_date_id);
    var task_start_time_elm = document.getElementById(task_start_time_id);
    console.log("modal_create_task",task_start_time_elm.value,task_start_date_elm.value)

    //set time
    // getting timezone aware utc
    new_task_start_time = convert_user_time_to_utc(task_start_date_elm.value,task_start_time_elm.value);
    console.log("modal_create_task","custom final start",new_task_start_time);
  }
  couple_duration_deadline('duration');
}


function is_time_overlap(x,y,u,v){
  console.log(x,y,u,v);
  // start of new > stop of old
  //        u-----v
  //   x ----- y

  if((x <= u && u <= y  && y <= v)){
    console.log("1")
    return true;
  }
  //
  //   u-----v
  //       x ----- y
  //
  if((u <= x && x <= v && v <= y)){
    console.log("fail 2")
    return true;
  }
  //     u---v
  //   x ----- y
  //
  if((x <= u && u <= v && v <= y) ){
    console.log("fail 3")
    return true;
  }
  //  u----------v
  //    x ---- y


  if(u <= x && x <= y && y<= v){
    console.log("fail 4")
    return true;
  }
  return false;

}

function phase_group_time_range(){
  var phase_list_group = project_schemes[current_project_id]["begin"];
  var phase_group_time_range_dict = {}
  for (var i = 0; i < phase_list_group.length; i++){

    var start_time_phase_group = Number.MAX_SAFE_INTEGER;
    var end_time_phase_group = 0;
    var valid_entry = false;
    // for phase group get the range of time

    for(var j = 0; j < phase_list_group[i].length; j++){
      if (phase_list_group[i][j][1] != null && phase_list_group[i][j][2] != null || phase_unique_id[current_clicked_phase_id]["phase_group_index"] == i){
        // keeping the time range when null ie.( [0,0] ) if that is the current phase group
        // console.log("phase group",phase_list_group[i][j][1], phase_list_group[i][j][2],j,phase_unique_id[current_clicked_phase_id]["phase_group_index"] )
        valid_entry = true;
        start_time_phase_group = Math.min(phase_list_group[i][j][1],start_time_phase_group);
        end_time_phase_group = Math.max(phase_list_group[i][j][2],end_time_phase_group);

      }

    }
    if (valid_entry) {
      phase_group_time_range_dict[i] = [start_time_phase_group,end_time_phase_group]

    }
  }
  return phase_group_time_range_dict;
}
var phase_group_time_range_id = {};
function is_valid_phase_time(phase_list_group){

  // function determines if the given new task time is within a valid time space
  // check that current phase time with new task included does overlap multiple phase groups
    console.log("is_valid_task_time","top of function phase list group",phase_list_group);

    var temp_start_current_phase = phase_unique_id[current_clicked_phase_id]["time_range"][0];
    var temp_end_current_phase = phase_unique_id[current_clicked_phase_id]["time_range"][1];
    var new_task_in_phase = false;
    //expand phase if needed to incoporate new task time
    if (temp_start_current_phase != null && temp_end_current_phase != null ){
      temp_start_current_phase = Math.min(temp_start_current_phase,new_task_start_time);
      temp_end_current_phase = Math.max(temp_end_current_phase,new_task_deadline_result);
    }else{
    // currrent phase has yet to be assigned a task and time range is null
    //  current phase will be set to the new task time range
      temp_start_current_phase = new_task_start_time;
      temp_end_current_phase = new_task_deadline_result;
      new_task_in_phase = true;
    // if current phase is a phase within a subphase there will be a match
    // else if phase is in top level there will be no macth falsey
    }

    // a dict of the phase group timeranges if the current phase has not tasks -> [0,0],
    // skip group counts that do not have tasks
    var phase_group_range = phase_group_time_range();

    // the index will be off if there is a phase_group with a null phase
    var current_phase_group_id = phase_unique_id[current_clicked_phase_id]["phase_group_index"];
    console.log("is_valid_phase_time",phase_group_range,current_phase_group_id,temp_start_current_phase);
    var group_keys = Object.keys(phase_group_range);
    var pivot = group_keys.indexOf(current_phase_group_id.toString());
    console.log("pivot",pivot,group_keys);
    if(pivot > 0 && (group_keys[pivot -1]) in phase_group_range){
      console.log("check phase group to left",group_keys[pivot -1]);

      var x = phase_group_range[group_keys[pivot -1]][0];
      var y = phase_group_range[group_keys[pivot -1]][1];
      // start of current phase must be greater than end of last phase group
      if (temp_start_current_phase <= y ){
        console.log("error- phase task starts before the previos phase group ends");
        error_modal(`<b>Error:</b> Task starts before the previous phase group ends <br/> Conflict with Task Ending: <b> ${ui_time(convertUTCTimestampDateToLocalDate(y * 1000))} </b>`)
        return false;
      }
    }
    if((pivot != group_keys.length -1) && (group_keys[pivot +1]) in phase_group_range){
      console.log("check phase group to right",group_keys[pivot +1]);
      console.log("here",(current_phase_group_id +1),phase_group_range,phase_group_range[group_keys[pivot +1]][0], phase_unique_id[current_clicked_phase_id]["time_range"])
      var x = phase_group_range[group_keys[pivot +1]][0];
      var y = phase_group_range[group_keys[pivot +1]][1];
      // end of phase must be less than start of next phase group
      if (temp_end_current_phase >= x  ){
        console.log("error- phase task ends after the next phase group starts");
        error_modal(`<b>Error:</b>  Task ends after the next phase group starts <br/> Conflict with Task Starting: <b> ${ui_time(convertUTCTimestampDateToLocalDate(x * 1000))}  </b>`);
        return false;
      }
    }

    // check which phase group overlaps with the current phase for the current phase_group_list - should only overlap with one phase group
    var phase_group_overlaps = [];
    for (var i = 0; i < phase_list_group.length; i++){

      var start_time_phase_group = Number.MAX_SAFE_INTEGER;
      var end_time_phase_group = 0;
      // for phase group get the range of time
      for(var j = 0; j < phase_list_group[i].length; j++){
        if (phase_list_group[i][j][1] != null && phase_list_group[i][j][2] != null){
          start_time_phase_group = Math.min(phase_list_group[i][j][1],start_time_phase_group)
          end_time_phase_group = Math.max(phase_list_group[i][j][2],end_time_phase_group)
        }

      }
      // check if current clicked on phase  overlaps with phase_group[i] Note - should only ever overlap with one phase group
      if (start_time_phase_group != Number.MAX_SAFE_INTEGER && end_time_phase_group != 0 && is_time_overlap(start_time_phase_group,end_time_phase_group,temp_start_current_phase,temp_end_current_phase)){
        // phase should match at least one phase group
        // add overlapping phase group to list of overlaps
        phase_group_overlaps.push(phase_list_group[i]);
      }
    }

    // there is an error if phase over laps with multiple phase groups ;
    // be specific about which phase is overlapping
    if (phase_group_overlaps.length > 1 ){
      //add list to global overlap error
      console.log('is_valid_task_time',"phase grpup overlaps",phase_group_overlaps);
      //get task task that is overlapping
      console.log(phase_unique_id[phase_group_overlaps[phase_group_overlaps.length - 1][0][0]]["name"] ,phase_group_overlaps.length)
      var task_name_overlap = phase_unique_id[phase_group_overlaps[phase_group_overlaps.length - 1][0][0]]["name"];
      var conflict_task_start = phase_unique_id[phase_group_overlaps[phase_group_overlaps.length - 1][0][0]]["time_range"][0];
      var conflict_task_end = phase_unique_id[phase_group_overlaps[phase_group_overlaps.length - 1][0][0]]["time_range"][1];
      console.log("there is an error the new task that was added to phase has expaned the phase into multiple phase groups");
      // error_modal(`error -the new task has expaned the phase group into another phase groups <b> ${task_name_overlap} </b>`);
      error_modal(`<b>Error:</b>  Task overlaps with another phase group <br/> Conflict with Task: ${task_name_overlap} <b> ${ui_time(convertUTCTimestampDateToLocalDate(conflict_task_start * 1000))} - ${ui_time(convertUTCTimestampDateToLocalDate(conflict_task_end * 1000))}  </b>`);

      return false;
    }
    // check if current phase id in phase group
    var match_phase_group = phase_group_overlaps.shift();

    if (match_phase_group == undefined){
      // we are adding a task to the last phase so there is no overlap
      return true;
    }
    if (new_task_in_phase == true ) {
      var found_phase_group = true;
    }
    for(var i = 0; i < match_phase_group.length; i++){

      if(current_clicked_phase_id == match_phase_group[i][0] ){
        //we found phase id and the phase id is not a subphase
        console.log(" phase found -  no phase group overlap error");
        return true;
      }else if (phase_unique_id[match_phase_group[i][0]]["type"]=="sub") {
        // if this is triggred it is possible the phase is in the current subphase
        // depth first search in to subphase to see if task time fits in sub phase
        console.log(match_phase_group[i][0], "recur for sub phase");
        if(is_valid_phase_time( project_schemes[current_project_id][match_phase_group[i][0]]) ){
          return true;
        }
      }
    }

    if (new_task_in_phase && found_phase_group ){
      //In the above for loop We have already searched the matched phase group and the current phase which has no time period did not exist, therfore, the phase group we searched was an overlap

      console.log("error phase overlaps with another phase");
      error_modal("<b>Error:</b> Task overlaps with another phase group");

      return false;
    }

    // will only reach this point when can't find the phase id byt the task time fits going down this path
    console.log("returned false")
    return false;
}

function is_valid_task_time() {
  // function determines if the given new task time is within a valid time space
  // check that current phase time with new task included does overlap multiple phase groups

    var phase_tasks = phase_unique_id[current_clicked_phase_id]["tasks"];
    console.log("phase tasks ",phase_tasks)
      // for task in phase check if task overlaps
      for(var j = 0; j < phase_tasks.length; j++){
        // check if new task overlaps with
        if (is_time_overlap(phase_tasks[j][1],phase_tasks[j][2],new_task_start_time,new_task_deadline_result)){
          error_modal(`<b>Error:</b> Task overlaps with a task already in the phase </br>  ${task_unique_id[phase_tasks[j][0]]["task_detail"]} <b> ${ ui_time(convertUTCTimestampDateToLocalDate(task_unique_id[phase_tasks[j][0]]["Start"] * 1000)) } - ${ ui_time(convertUTCTimestampDateToLocalDate(task_unique_id[phase_tasks[j][0]]["Deadline"] * 1000)) }</b>`)
          return false;
        }
      }
      return true;
}

function update_project_scheme_phase(phase_group_list){
    console.log("update_project_scheme_phase",phase_group_list)
    // create ordered list of phase ids of the current project
    //    var phase_group_list = project_schemes[current_project_id]["begin"];

    for (var i = 0; i < phase_group_list.length; i++){
      for(var j = 0; j < phase_group_list[i].length; j++){

          if( phase_group_list[i][j][0] == current_clicked_phase_id){
              if(phase_group_list[i][j][1] != null){
                phase_group_list[i][j][1] = Math.min(phase_group_list[i][j][1],new_task_start_time);

              }else{
                phase_group_list[i][j][1] = new_task_start_time;
              }

              if (phase_group_list[i][j][2] != null) {
                phase_group_list[i][j][2] = Math.max(phase_group_list[i][j][1],new_task_deadline_result);
              }else{
                phase_group_list[i][j][2] = new_task_deadline_result;
              }
              return true;
          }
          if(phase_unique_id[phase_group_list[i][j][0]]["type"] == "sub" ){
              if(update_project_scheme_phase(project_schemes[current_project_id][phase_group_list[i][j][0]])){
                // check if need update subphase
                if(phase_group_list[i][j][1] != null){
                  phase_group_list[i][j][1] = Math.min(phase_group_list[i][j][1],new_task_start_time);

                }else{
                  phase_group_list[i][j][1] = new_task_start_time;
                }

                if (phase_group_list[i][j][2] != null) {
                  phase_group_list[i][j][2] = Math.max(phase_group_list[i][j][1],new_task_deadline_result);
                }else{
                  phase_group_list[i][j][2] = new_task_deadline_result;
                }
                return true;
              }
          }
      }
    }
    return false;
}


function create_person_id() {

  while (true){
    var rand_id = getRandomArbitrary(0, 5000000000000);
    if(!(rand_id.toString() in people_unique_id)){
      //might want to make sure task id is not a phase id
      break;
    }
  }
  return rand_id.toString();

}

function create_phase_id() {

  while (true){
    var rand_id = getRandomArbitrary(0, 5000000000000);
    if(!(rand_id.toString() in phase_unique_id)){
      //might want to make sure task id is not a phase id
      break;
    }
  }
  return rand_id.toString();

}
function create_task_id() {

  while (true){
    var rand_id = getRandomArbitrary(0, 5000000000000);
    if(!(rand_id.toString() in task_unique_id)){
      //might want to make sure task id is not a phase id
      break;
    }
  }
  return rand_id.toString();

}
function create_story_id() {

  while (true){
    var rand_id = getRandomArbitrary(0, 5000000000000);
    if(!(rand_id.toString() in story_unique_id)){
      //might want to make sure task id is not a phase id
      break;
    }
  }
  return rand_id.toString();

}

var prev_task_elm = null;
function choose_task_start_time(elm){
  // switch func to choose start by setting

  // update start time with the current switch setting
  console.log("choose_task_start_time",!elm.checked)
  if(prev_task_elm == null && !elm.checked){
    console.log("first");
    // on first go click on checked elm
    prev_task_elm = elm;
    elm.checked = true;
      set_start_time_on_change();
    return;
  }
  if(prev_task_elm == null){
    console.log("sec");
    // on first go click on different elm than checked
    prev_task_elm = document.getElementById('immi_start_task_switch');
    prev_task_elm.checked = false;
    prev_task_elm.parentElement.parentElement.style.filter = "blur(1px)";
    elm.parentElement.parentElement.style.filter = "blur(0px)";
    prev_task_elm = elm;
      set_start_time_on_change();
    return;
  }

  if(prev_task_elm == elm){
    console.log("third");
    elm.checked = true;
    prev_task_elm = elm;
      set_start_time_on_change();
    return;
  }
  if(prev_task_elm != elm){
    console.log("fourth");
    prev_task_elm.checked = false;
    elm.checked = true;
    prev_task_elm.parentElement.parentElement.style.filter = "blur(1px)";
    elm.parentElement.parentElement.style.filter = "blur(0px)";
    prev_task_elm = elm;
      set_start_time_on_change();
    return;
  }
}

var task_clicked_on = null
function delete_story(){
  // task status is left the same on the delete may need to change this
  console.log("delete_story",task_clicked_on, story_id_delete);
  for(var i = 0; i < task_unique_id[task_clicked_on]["Stories"].length; i++){
    if(story_id_delete == task_unique_id[task_clicked_on]["Stories"][i][0]){
      task_unique_id[task_clicked_on]["Stories"].splice(i,1);
    }
  }
  delete story_unique_id[story_id_delete];
  document.getElementById(story_id_delete).remove(); // remove story card from container

}


function delete_task(){
  console.log("delete",task_id_delete);
  delete_task_helper(current_clicked_phase_id,task_id_delete); // in utils
  update_project_scheme_time(phase_list = null);
  create_phase_task_ui(current_clicked_phase_id);
  pre_pop_setup();
  populate_project_map(current_project_id,current_sub_phase);

}

var edit_task = false;


var subphase_delete = null; // needed to delete a sub phase
function delete_phase() {
  // make delete inactive when project is live

  // delete must not delete the last phase in begin
  if(subphase_delete){
    console.log("deleting subphase",current_sub_phase);
    if(project_schemes[current_project_id][current_sub_phase].length > 0){
      for(var i =0; i < project_schemes[current_project_id][current_sub_phase].length; i++){
        console.log(project_schemes[current_project_id][current_sub_phase][i])
        for(var j = 0; j < project_schemes[current_project_id][current_sub_phase][i].length; j++){

          console.log("phases-----begin",project_schemes[current_project_id][current_sub_phase][i].length,project_schemes[current_project_id][current_sub_phase][i][j][0]);
          // delete phases contained within subphase first ;
          delete_phase_helper(project_schemes[current_project_id][current_sub_phase][i][j][0]);

          if (project_schemes[current_project_id][current_sub_phase][i] == undefined){
            break;
          }
        }
      }
      // delete sub phase
      delete_phase_helper(current_sub_phase);

    }else{
      // sub phase had no phases just delete subphase
      delete_phase_helper(current_sub_phase);
    }
    // delete subphase from project scheme
    console.log("before subphase to delete ",current_sub_phase,JSON.parse(JSON.stringify(project_schemes[current_project_id])))
    delete project_schemes[current_project_id][current_sub_phase]
    console.log("after subphase to delete ",current_sub_phase,JSON.parse(JSON.stringify( project_schemes[current_project_id])))

    pop_nav_stack()
    //Remove subphase from project menu


  }else if(phase_unique_id[current_clicked_phase_id]["type"] == "real"){
    delete_phase_helper(current_clicked_phase_id); // in utils
  }
  //update project_scheme phase times
   /////

  reorder_group_count(true,project_schemes[current_project_id]["begin"],0);
  update_project_scheme_time(phase_list = null);

  create_phase_task_ui(current_clicked_phase_id);
  console.log("after subphase to delete ",current_sub_phase,JSON.parse(JSON.stringify( project_schemes[current_project_id])))

  main_projects_ui();
  pre_pop_setup();
  populate_project_map(current_project_id,current_sub_phase);

}

var edit_phase = false;
function edit_phase_modal(){
  if(document.getElementById('modal_phase_name').value == ""){
    error_modal("<b>Error:</b> Phase name is missing");
    return;
  }
  // set new name for phase
  phase_unique_id[current_clicked_phase_id]["name"] = document.getElementById('modal_phase_name').value
  // redo ui to show user change
  create_phase_task_ui(current_clicked_phase_id);
  pre_pop_setup()
  populate_project_map(current_project_id,current_sub_phase)
  close_modal();
}

function create_phase() {
  if(edit_phase){
    // when edit phase option is true
    // run edit phase function
    edit_phase_modal();
    return
  }
  //create phase id
  var curr_phase_id = create_phase_id();
  // get phase name
  var phase_name = document.getElementById('modal_phase_name').value;
  // ensure phase name has name
  if (phase_name == ""){
    error_modal("<b>Error:</b> Phase needs a name")
    return;
  }
  // is the current phase a sub phase
  var phase_switch_res = document.getElementById('phase_switch').checked;
  if(phase_switch_res){
    var type = "sub";
    project_schemes[current_project_id][curr_phase_id] = [];
  }else{
    var type = "real";
  }
  // create new phase
  // phase group index can is fine as one because we add the actual phase group index to the model  at the end of the func
  phase_unique_id[curr_phase_id] ={"name": phase_name,"type":type,"time_range":[null,null],"phase_group_index":1,"tasks":[]};
  var n = phase_index_to_add;
  // is integer
  if(Number(n) === n && n % 1 === 0){

    // index is float and we need to add another phase group to the project scheme,
    if(current_sub_phase == null){
      // top level phase group
      console.log(  project_schemes[current_project_id]["begin"][n-1])
      project_schemes[current_project_id]["begin"][n-1].push([curr_phase_id,null,null]);
      console.log(  project_schemes[current_project_id]["begin"][n-1]);

    }else{
      //sub phase group
      console.log(current_sub_phase)
      console.log(  project_schemes[current_project_id][current_sub_phase]);
      project_schemes[current_project_id][current_sub_phase][n-1].push([curr_phase_id,null,null]);

    }

  }else{
    // index is float and we need to add another phase group to the project scheme
    if(current_sub_phase == null){

      console.log(  project_schemes[current_project_id]["begin"])
      project_schemes[current_project_id]["begin"].splice(Math.floor(n), 0, [[curr_phase_id,null,null]]);
      console.log(  project_schemes[current_project_id]["begin"])

    }else{
      console.log(  project_schemes[current_project_id][current_sub_phase]);
      project_schemes[current_project_id][current_sub_phase].splice(Math.floor(n), 0, [[curr_phase_id,null,null]]);
      console.log(  project_schemes[current_project_id][current_sub_phase]);
    }
  }
  reorder_group_count(true,project_schemes[current_project_id]["begin"],0);

  pre_pop_setup()
  populate_project_map(current_project_id,current_sub_phase);
  main_projects_ui();
  close_modal();
}

var new_task_start_time = null;
var new_task_duration_result = null;
var new_task_deadline_result= null;
var phase_group_overlap_error = []; // not implemented - iterate over phases execpt currently clicked phase and tell user that there is overlap
var new_task_id = null;
function modal_create_task(){

  // when user clicks create task the following procedure is run
  // get task description
  var modal_task_detail_id = "modal_task_detail"
  //set new task detail
  var new_task_detail = document.getElementById(modal_task_detail_id).innerHTML;
  //filter task_detail for javascript
  //new_task_detail  = sanitizeHTML(new_task_detail);

  // set the time items - start, duration, deadline
  set_start_time_on_change();

  console.log("modal_create_task","duration deadline",new_task_duration_result,new_task_deadline_result);

  if(task_action =="create_task"){
    console.log("modal_create_task","user task desctiption",new_task_detail);
    // add task to phase
    // add task datastuture
  }
  var modal_task_deliverables_id = "modal_task_deliverables";
  var new_task_deliverables = document.getElementById(modal_task_deliverables_id).innerHTML;
  // filter deliverables for nonsense - javascript (...ie)
  // new_task_deliverables  = sanitizeHTML(new_task_deliverables);
  // get task mmebers if any
  var new_task_people = []
  var new_task_team = []
  if(task_people.length > 0){
    new_task_team = task_teams.slice();
    new_task_people = task_people.slice();
  }

  console.log(new_task_start_time, '-',new_task_duration_result, '-',new_task_deadline_result,'-',
          new_task_detail, '-', new_task_deliverables, '-',new_task_team,'-',new_task_people
  );
  console.log("new start time",new_task_start_time,new_task_deadline_result);
  // check to see that time fit in datastruture
  if(!is_valid_phase_time(project_schemes[current_project_id]["begin"])){
    return
  }
  console.log("task is valid within project scheme, does not cause phase to overlap")
  if(edit_task != false){
    // we are going to change the current data structure but we might need to reset it
    var temp_project_schemes = JSON.parse(JSON.stringify(project_schemes));
    var temp_phase_unique_id = JSON.parse(JSON.stringify(phase_unique_id));
    var temp_task_unique_id = JSON.parse(JSON.stringify(task_unique_id));
    var task_status = task_unique_id[edit_task]["Status"]
    var task_stories = task_unique_id[edit_task]["Stories"]
    delete_task_helper(current_clicked_phase_id, edit_task, true)//don't delete stories
    update_project_scheme_time();
    console.log("diff project scheme",temp_project_schemes);
    var task_id = edit_task;

  }else{
    var task_id =create_task_id();
    var task_status = "Pending";
    var task_stories = [];

  }
  console.log("editing task",edit_task,new_task_start_time,new_task_deadline_result)
  if(!is_valid_task_time()){
    project_schemes = JSON.parse(JSON.stringify(temp_project_schemes));
    phase_unique_id = JSON.parse(JSON.stringify(temp_phase_unique_id));
    task_unique_id = JSON.parse(JSON.stringify(temp_task_unique_id));
    return
  }


  console.log("task is valid within phase, sequential ");


  //check if task has an owner
  if (new_task_people.length ==0){
    error_modal("<b>Error:</b> Task must have individual(s) assigned");
    project_schemes = JSON.parse(JSON.stringify(temp_project_schemes));
    phase_unique_id = JSON.parse(JSON.stringify(temp_phase_unique_id));
    task_unique_id = JSON.parse(JSON.stringify(temp_task_unique_id));
    return
  }

  // create new structure task_unique_id
  // create new task create new id  - send task to server - reciveve new id if needed
  new_task_id = task_id;
  task_unique_id[task_id] = {"task_detail": new_task_detail,
                 "Status":task_status,
                 "Start": new_task_start_time,
                 "Duration": new_task_duration_result,
                 "Deadline": new_task_deadline_result,
                 "Deliverables": new_task_deliverables,
                 "Individuals": new_task_people,
                 "Teams":new_task_team,
                 "Stories": task_stories
               }
  console.log("new task added ",JSON.parse(JSON.stringify(task_unique_id )))

  // update phase_unique_id,
  //update task feild,

  phase_unique_id[current_clicked_phase_id]["tasks"].push([task_id,new_task_start_time,new_task_deadline_result])
  // order tssk feild
  phase_unique_id[current_clicked_phase_id]["tasks"].sort(function(a, b) {
  return a[1] - b[1];
});

  update_project_scheme_time();
  console.log("diff project scheme",project_schemes)
  reorder_group_count(true,project_schemes[current_project_id]["begin"],0);
  create_phase_task_ui(current_clicked_phase_id);
  // update phase task count
  var phase_header_title = document.getElementById('phase_name_card');
  var phase_name = phase_unique_id[current_clicked_phase_id]["name"];
  phase_header_title.innerHTML = `${phase_name} <p style ="margin:1px;margin-left: 10px;font-size: 15px;">Task Count: ${phase_unique_id[current_clicked_phase_id]["tasks"].length} </p>`;

  pre_pop_setup();
  populate_project_map(current_project_id,current_sub_phase);
  close_modal();
  setTimeout(go_to_task_after_creation(), 250); // prints "[object Window]" after 1 second

}

var story_id_edit = null;
var current_story_phase_id = null; // set in show modal -> actually task id
function modal_create_story(){
  if(story_id_edit == null){
    current_story_task_id_ui = current_story_phase_id;
    // create story id
    var story_id =create_story_id();
  }else{
    current_story_task_id_ui = task_clicked_on;
    var task_clicked_on_story = task_clicked_on;
    var story_id = story_id_edit;
  }


  // user initiates function with button press
  var story_start_date_id = 'custom_story_start_date';
  var story_start_time_id = 'custom_story_start_time';
  var story_start_date_val = document.getElementById(story_start_date_id).value;
  var story_start_time_val = document.getElementById(story_start_time_id).value;

  var story_end_date_id = 'custom_story_end_date';
  var story_end_time_id = 'custom_story_end_time';
  var story_end_date_val = document.getElementById(story_end_date_id).value;
  var story_end_time_val = document.getElementById(story_end_time_id).value;
  // ensure end > start
  console.log(story_end_date_val,story_end_time_val)
  var utc_time_aware_start = convert_user_time_to_utc(story_start_date_val,story_start_time_val);
  var utc_time_aware_end = convert_user_time_to_utc(story_end_date_val,story_end_time_val);
  if (utc_time_aware_start >= utc_time_aware_end){
    error_modal("Error start time is ahead of end time");
    return;
  }
  //Get story Details
  var modal_story_detail_val = document.getElementById('modal_story_detail').innerHTML;

  // get status
  var story_status = document.getElementById('story_status_options').value;

  // create story
  story_unique_id[story_id] = {
                "story_detail": modal_story_detail_val,
                 "Status":story_status,
                 "Start": utc_time_aware_start,
                 "Duration": 0,
                 "Stop": utc_time_aware_end,
                 "Created_by": current_user,
              }
  if(story_id_edit == null){
    // add story to tasks
    task_unique_id[current_story_phase_id]["Stories"].push([story_id,utc_time_aware_start])

    // update task status with story status
    task_unique_id[current_story_phase_id]["Status"] = story_status;
    // sort task stories
    task_unique_id[current_story_phase_id]["Stories"].sort(function(a, b) {
      return a[1] - b[1];
    });
  }else{
    for(var i = 0; i < task_unique_id[task_clicked_on_story]["Stories"].length; i++){
      if(task_unique_id[task_clicked_on_story]["Stories"][i][0] ==  story_id){
        // change start time in the task datastuture
        task_unique_id[task_clicked_on_story]["Stories"][i][1] = utc_time_aware_start;
      }
    }
    // sort task stories
    task_unique_id[task_clicked_on_story]["Stories"].sort(function(a, b) {
      return a[1] - b[1];
    });
  }


  story_id_ui_scroll = story_id;
  console.log("current_clicked_phase_id");
  if(phase_view){
        // create tasks in phase view if on
    create_phase_task_ui(current_clicked_phase_id);
  }
  if(task_view){
    // create tasks in task view if on
    populate_tasks_for_person(current_task_view_diplay_person_id);
    // setTimeout(force_redraw_task_container(document.getElementById('phase_task_list_container')), 100)
    // setTimeout(force_redraw_task_container(document.getElementById('task_view_ui_task_container')),200)

    // force_redraw_task_container(document.getElementById('task_view_ui_task_container'))


  }
  setTimeout(go_to_story_after_creation(), 1000);

  close_modal();


}

///  THIS STUFF DEALS WITH PICKING TEAM MEMBERS AND TEAM - UI

var task_teams = [];
var task_people = [];

function team_member_assign(){
  // when new task modal is opened add event listner to the
  // clickable team and members
  var class_name = 'member_option';
  var class_name_ = 'team_option';
  var elements = document.getElementsByClassName(class_name);
  var elements_ = document.getElementsByClassName(class_name_);
  //  assign listener to people(team member)
  for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', function(e){
        var current = e.target

        var parent = current.parentNode;
        if(current.classList.contains(class_name)){
          // check if current teammber in chosen group already
          // if so remove the team member id and change the background
          if(task_people.includes(current.id) ){
            current.style.backgroundColor = 'white';
            task_people.splice(task_people.indexOf(current.id), 1);
          }else{
            current.style.backgroundColor = 'grey';
            task_people.push(current.id);
          }

        }else {
          if(task_people.includes(parent.id)){
            parent.style.backgroundColor = 'white';
            task_people.splice(task_people.indexOf(parent.id), 1);
          }else{
            parent.style.backgroundColor = 'grey';
            task_people.push(parent.id);
          }
        }
        console.log(task_teams,task_people);

    });
  }
  for(var i = 0; i < elements_.length; i++){
    elements_[i].addEventListener('click', function(e){
        var current = e.target

        var parent = current.parentNode;
        if(current.classList.contains(class_name_)){
          // check if current team in chosen group already
          // if so remove the team  id and change the background
          if(task_teams.includes(current.id) ){
            current.style.backgroundColor = 'white';
            task_teams.splice(task_teams.indexOf(current.id), 1);
            auto_select_members(false,current.id);
          }else{
            current.style.backgroundColor = 'grey';
            task_teams.push(current.id);
            auto_select_members(true,current.id);
          }

        }else {
          if(task_teams.includes(parent.id)){
            parent.style.backgroundColor = 'white';
            task_teams.splice(task_teams.indexOf(parent.id), 1);
            auto_select_members(false,parent.id);
          }else{
            parent.style.backgroundColor = 'grey';
            task_teams.push(parent.id);
            auto_select_members(true,parent.id);
          }
        }
        console.log(task_teams,task_people);
    });
  }
}

function auto_select_members(flag,team_id){


  console.log(flag,team_id, user_teams[team_id])
  if (flag){
    for(const people_id of user_teams[team_id]){
      if(people_unique_id[people_id]["deleted"] == "false" && people_unique_id[people_id]["project_id"] == current_project_id){
        console.log(people_id)
        var people_elm = document.getElementById(people_id);
        people_elm.style.backgroundColor = 'grey';
        if(!task_people.includes(people_id)){
          task_people.push(people_id);
        }
      }

    }
  }else{
    for(const people_id of user_teams[team_id]){
      if(people_unique_id[people_id]["deleted"] == "false" && people_unique_id[people_id]["project_id"] == current_project_id){
        var people_elm = document.getElementById(people_id);
        people_elm.style.backgroundColor = 'white';
        if(task_people.includes(people_id)){
          task_people.splice(task_people.indexOf(people_id), 1);
        }
      }

    }
  }
}
// team picks

/// ENC OF  STUF DEALLING WITH  PICKING TEAM MEMERS AND TEAM - UI
var phase_id_delete = null;
var task_id_delete = null;
var story_id_delete = null;
var project_id_delete = null;
var team_id_delete = null;
var people_id_delete = null;


function close_modal(){
  close_error_modal_id(); // get rid of error modal or blank whitespasce takes up lower half of screen;
  var modal = document.getElementById("myModal");
  // hide delete part of modal
  var delete_modal_content_class = "confirmDelete";
  document.getElementsByClassName(delete_modal_content_class)[0].style.display = "none";
  // hide add task part of modal
  var add_task_modal_content_class = "task_create_edit_modal";
  document.getElementsByClassName(add_task_modal_content_class)[0].style.display = "none";
      // get task description
      var modal_task_detail_id = "modal_task_detail"
      //set new task detail
      document.getElementById(modal_task_detail_id).innerHTML = '';
      // set task detail
      var modal_task_deliverables_id = "modal_task_deliverables";
      document.getElementById(modal_task_deliverables_id).innerHTML = "";

      //clear start after
      document.getElementById('time_after_prev_task_input').value = 1;
      document.getElementById('time_after_prev_task_input_unit').value = "min";
      // reset custom start date
      var date = new Date();
      document.getElementById('custom_task_start_date').value = date.toISOString().substring(0,10);
      document.getElementById('custom_task_start_time').value = date.toISOString().substring(11,16);
  // hide add story part of modal
  var add_story_modal_content_class = "story_create_edit_modal";
  document.getElementsByClassName(add_story_modal_content_class)[0].style.display = "none";
  // hide phase part of modal
  var add_phase_modal_content_class = "phase_create_edit_modal";
  document.getElementsByClassName(add_phase_modal_content_class)[0].style.display = "none";
      // reset modal phase name
      document.getElementById('modal_phase_name').value = "";
      // reset phase switch
      document.getElementById('phase_switch').check = false;

  // hide modal
  modal.style.display = "none";
  // error modal
  var error_modal_content_class = "error_modal";
  document.getElementsByClassName(error_modal_content_class)[0].style.visibility = "hidden";

  document.getElementById('story_status_options').value = "Upcoming";
  document.getElementById('modal_story_detail').innerHTML = "";

  //after edit modal
  // set the header on the create phase modal after edit
  document.getElementById('phase_creation_edit_header').innerHTML = "Create Phase";
  // add sub (header and switch)
  document.getElementById('sub_phase_modal_header').style.display = "block";
  document.getElementById('sub_phase_modal_switch').style.display = "block";
  // hide people edit
  document.getElementsByClassName('people_edit_modal')[0].style.display = "none";
  // hide team edit
  document.getElementsByClassName('team_edit_modal')[0].style.display = "none";
  // hide project edit
  document.getElementsByClassName('project_edit_modal')[0].style.display = "none"
  phase_id_delete = null;
  task_id_delete = null;
  story_id_delete = null;
  project_id_delete = null;
  team_id_delete = null;
  people_id_delete = null;
  task_action = null;
  new_task_start_time = null;
  new_task_duration_result = null;
  new_task_deadline_result= null;
  current_story_phase_id = null;
  phase_index_to_add = null; // reset chosen index of adding phase
  edit_phase = false; // reset edit phase;
  edit_task = false; // reset task
  subphase_delete = null; // reset subphase to be deleted
  task_clicked_on = null; // reset for delete story need to know which task the story belongs too
  story_id_edit = null;
  person_edit_id =  null;
  team_edit_id = null;
  task_teams = [];
  task_people = [];
  team_member_edit_list = [];
  temp_people_unique_id = null;
  project_edit_id = null;
  temp_project_status = null;
  phase_group_time_range_id = {};// holds phase id's from phase_group_time_range function

}

function confirm_delete(){
  console.log("phase", phase_id_delete,"task", task_id_delete,
"story",  story_id_delete)

  if(phase_id_delete != null){
    //Note: check if element exists before deleting for websocket error prevention
    // delete phase from map
    // if sub phase remove
    // rerender map
    // show animation when connecting to server;
    // close phase modal

    delete_phase();
    console.log("delete phase id", phase_id_delete);

  }

  if(task_id_delete != null){
    //remove task card
    //remove task story container
    delete_task();
    console.log("delete task id", task_id_delete);
    ;
  }
  if(story_id_delete != null){
    //remove task card
    //remove task story container
    console.log("delete story id", story_id_delete);
    delete_story();
  }


  if (project_id_delete != null){
    //remove project from menu
  }

  if (team_id_delete != null){
    //remove team from menu
    // remove teams from tasks
  }
  if (people_id_delete != null){
    //remove people from menu
    // remove people from teams
    // remove people from tasks

  }
  close_modal();
}


function show_modal(options){
      // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      close_modal();
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        close_modal();
      }
    }



    if (options.delete){

      var delete_modal_content_class = "confirmDelete";
      document.getElementsByClassName(delete_modal_content_class)[0].style.display = "flex";

      if(options.phase_delete != null){
        if(people_unique_id[current_user]["permission_bits"].charAt(0) == '0'){
          close_modal();
          var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to delete a phase <br>
          Project Owner must edit your privliges in the project settings </p>`;
          map_message_ui(user_alert_map_message)
          return;

        }
        //Note: should not pass as an option pass as a variable when the phase node is clicked
        if(options.subphase){
          console.log("delete subphase")
          phase_id_delete = options.phase_delete;
          subphase_delete = true;
          document.getElementById('delete_header_name').innerHTML = phase_unique_id[current_sub_phase]["name"] + " -  Sub Phase";
          return
        }
        // get a lock on phase
        //change header on modal content
        phase_id_delete = options.phase_delete;

        document.getElementById('delete_header_name').innerHTML = phase_unique_id[current_clicked_phase_id]["name"];
      }

      if(options.task_delete != null){
        if(people_unique_id[current_user]["permission_bits"].charAt(1) == '0'){
          close_modal();
          var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to delete a task <br>
          Project Owner must edit your privliges in the project settings </p>`;
          map_message_ui(user_alert_map_message)
          return;

        }
        //get lock on phase
        // get lock on task
        // change header on modal content
        task_id_delete = options.task_delete; // the actual task delete
        document.getElementById('delete_header_name').innerHTML = task_unique_id[options.task_delete]["task_detail"];

      }

      if(options.story_delete != null){
        // people permissions
        if(people_unique_id[current_user]["permission_bits"].charAt(2) == '0'){
          close_modal();
          var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to delete a story <br>
          Project Owner must edit your privliges in the project settings </p>`;
          map_message_ui(user_alert_map_message)
          return;

        }
        // get lock on phase to delete story
        // get lock on task to delete story
        // get lock on story to delete story
        // change header on delete content
        story_id_delete = options.story_delete;
        task_clicked_on = options.task_clicked_on;
        document.getElementById('delete_header_name').innerHTML = story_unique_id[options.story_delete]["story_detail"];
      }

    }

    if (options.add_task){
      if(people_unique_id[current_user]["permission_bits"].charAt(1) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to create a task <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }

      //change confirmation button
      document.getElementById('create_task_modal_confirm').innerHTML = '<p>Create Task</p>'

      task_action = "create_task"; // set task action for modal_create_task
      // get lock on phase to add task
      var add_task_modal_content_class = "task_create_edit_modal";
      document.getElementsByClassName(add_task_modal_content_class)[0].style.display = "flex";

      // Set Modal Header
      document.getElementById('task_creation_edit_header').innerHTML = "Create Task"


      //reset task start time;
      document.getElementById("immi_start_task_switch").click();

      //reset start after time
      document.getElementById('time_after_prev_task_input').value = 1;
      document.getElementById('time_after_prev_task_input_unit').value = "min";
      // reset custom start date
      var date = new Date();
      //convert to local time
      date = convertUTCTimestampDateToLocalDate_return_timestamp(date.getTime());

      document.getElementById('custom_task_start_date').value = date.toISOString().substring(0,10);
      document.getElementById('custom_task_start_time').value = date.toISOString().substring(11,16);

      // reset duration
      document.getElementById('task_duration_time_digit').value = 1;
      document.getElementById('task_duration_time_unit').value = "min";

      set_start_time_on_change();
      // populate modal with users people and tasks
      var team_mem_elm = document.getElementsByClassName('options_members_list')[0];
      var team_elm = document.getElementsByClassName('options_members_list')[1];


      //create people content
      var team_member_list = "";
      for(const property in people_unique_id){
          if(people_unique_id[property]["deleted"] == "false" && people_unique_id[property]["project_id"] == current_project_id){
          var elm_ =  `<div id="${property}" class="member_option"><p class="member_option_text">${people_unique_id[property]["name"]}</p></div>`
          team_member_list += elm_;
        }
      }
      team_mem_elm.innerHTML = team_member_list;

      var team_list = "";
      for(team_id in user_teams){
        if(team_unique_id[team_id]["deleted"] == "false" && team_unique_id[team_id]["project_id"] == current_project_id ){
          var elm_ =  `<div id="${team_id}" class="team_option"><p class="member_option_text">${team_unique_id[team_id]["name"]}</p></div>`
          team_list += elm_;
        }
      }
      team_elm.innerHTML = team_list;

      team_member_assign();
      var is_people = false;
      for(const person in people_unique_id){
        if(people_unique_id[person]["project_id"] == current_project_id){
          is_people = true;
        }
      }

        if(!(is_people)){
          error_modal("<b>Error:</b> Create a Person to assign a task too.");
        }
    }

    if(options.edit_task){
      // user permissions tiest
      if(people_unique_id[current_user]["permission_bits"].charAt(1) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to edit a task <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;
      }

      edit_task = options.edit_task;
      //change confirmation button
      document.getElementById('create_task_modal_confirm').innerHTML = '<p>Edit Task</p>'

      // get lock on phase to add task
      var add_task_modal_content_class = "task_create_edit_modal";
      document.getElementsByClassName(add_task_modal_content_class)[0].style.display = "flex";
      //change modal header
      document.getElementById('task_creation_edit_header').innerHTML = "Edit Task"

      //set task detail
      document.getElementById('modal_task_detail').innerHTML = task_unique_id[edit_task]["task_detail"]

      //reset custom start time to task start time
      var date = convertUTCTimestampDateToLocalDate_return_timestamp(task_unique_id[edit_task]["Start"] * 1000)
      document.getElementById('custom_task_start_date').value = date.toISOString().substring(0,10);
      document.getElementById('custom_task_start_time').value = date.toISOString().substring(11,16);

      // reset duration
      document.getElementById('task_duration_time_digit').value = Math.max(1, Math.round((task_unique_id[edit_task]["Deadline"] -  task_unique_id[edit_task]["Start"])/60 )) ;
      document.getElementById('task_duration_time_unit').value = "min";
      //reset task start time to custom time
      document.getElementById("custom_start_switch").click();
      // set task deliverables
      document.getElementById('modal_task_deliverables').innerHTML = task_unique_id[edit_task]["Deliverables"]

      // populate modal with users people and tasks
      var team_mem_elm = document.getElementsByClassName('options_members_list')[0];
      var team_elm = document.getElementsByClassName('options_members_list')[1];

      //create people content
      var team_member_list = "";
      for(const property in people_unique_id){
          if(people_unique_id[property]["deleted"] == "false" && people_unique_id[property]["project_id"] == current_project_id){
          var elm_ =  `<div id="${property}" class="member_option"><p class="member_option_text">${people_unique_id[property]["name"]}</p></div>`
          team_member_list += elm_;
        }
      }
      team_mem_elm.innerHTML = team_member_list;

      var team_list = "";
      for(team_id in user_teams){
        if(team_unique_id[team_id]["deleted"] == "false" && team_unique_id[team_id]["project_id"] == current_project_id){
          var elm_ =  `<div id="${team_id}" class="team_option"><p class="member_option_text">${team_unique_id[team_id]["name"]}</p></div>`
          team_list += elm_;
        }
      }
      team_elm.innerHTML = team_list;

      team_member_assign();


      //click on the associatiated teams
      for(var i = 0; i <   task_unique_id[edit_task]["Teams"].length; i++){

        if(team_unique_id[team_id]["deleted"] == "false" && team_unique_id[team_id]["project_id"] == current_project_id){
          document.getElementById(task_unique_id[edit_task]["Teams"][i]).click();
        }
      }
      // click on the associatiated individuals if not already selected
      for(var i = 0; i <   task_unique_id[edit_task]["Individuals"].length; i++){
        if(people_unique_id[task_unique_id[edit_task]["Individuals"][i]]["deleted"] == "false" && people_unique_id[task_unique_id[edit_task]["Individuals"][i]]["project_id"] == current_project_id){
          if(document.getElementById(task_unique_id[edit_task]["Individuals"][i]).style.backgroundColor != 'grey'){
            document.getElementById(task_unique_id[edit_task]["Individuals"][i]).click();
          }
        }

      }

    var is_people = false;
    for(const person in people_unique_id){
      if(people_unique_id[person]["project_id"] == current_project_id){
        is_people = true;
      }
    }

      if(!(is_people)){
        error_modal("<b>Error:</b> Create a Person to assign a task too.");
      }
    }

    if(options.add_story){
      // people permissions
      if(people_unique_id[current_user]["permission_bits"].charAt(2) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to create a story <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }
      // people permissions
      if(people_unique_id[current_user]["permission_bits"].charAt(2) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to create a story <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }
      var add_story_modal_content_class = "story_create_edit_modal";
      document.getElementsByClassName(add_story_modal_content_class)[0].style.display = "flex";
      // set start of story and end of story time to today
      var date = new Date();
      date = convertUTCTimestampDateToLocalDate_return_timestamp(date.getTime());
      document.getElementById('custom_story_start_date').value = date.toISOString().substring(0,10);
      document.getElementById('custom_story_start_time').value = date.toISOString().substring(11,16);

      document.getElementById('custom_story_end_date').value = date.toISOString().substring(0,10);
      document.getElementById('custom_story_end_time').value = date.toISOString().substring(11,16);

      current_story_phase_id = options.story_task_id;
      status_option_generation();
    }

    if(options.edit_story){
      // people permissions
      if(people_unique_id[current_user]["permission_bits"].charAt(2) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to edit a story <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }
      var add_story_modal_content_class = "story_create_edit_modal";
      document.getElementsByClassName(add_story_modal_content_class)[0].style.display = "flex";
      task_clicked_on = options.task_clicked_on;
      story_id_edit = options.edit_story;
      status_option_generation();
      //modal_create_story(){
      if(story_unique_id[options.edit_story]["Status"] == "Pending"){
        story_unique_id[options.edit_story]["Status"] = "On Track";
      }
      // get status
      document.getElementById('story_status_options').value = story_unique_id[options.edit_story]["Status"];
      //Get story Details
      document.getElementById('modal_story_detail').innerHTML = story_unique_id[options.edit_story]["story_detail"];
      // user initiates function with button press

      var date = convertUTCTimestampDateToLocalDate_return_timestamp(story_unique_id[options.edit_story]["Start"] * 1000)

      var story_start_date_id = 'custom_story_start_date';
      var story_start_time_id = 'custom_story_start_time';
      document.getElementById(story_start_date_id).value = date.toISOString().substring(0,10);
      document.getElementById(story_start_time_id).value = date.toISOString().substring(11,16);

      var date = convertUTCTimestampDateToLocalDate_return_timestamp(story_unique_id[options.edit_story]["Stop"] * 1000)
      var story_end_date_id = 'custom_story_end_date';
      var story_end_time_id = 'custom_story_end_time';
      var story_end_date_val = document.getElementById(story_end_date_id).value = date.toISOString().substring(0,10);
      var story_end_time_val = document.getElementById(story_end_time_id).value = date.toISOString().substring(11,16);

    }

    if(options.add_phase){
      // people permissions
      if(people_unique_id[current_user]["permission_bits"].charAt(0) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to create a phase <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }
      var add_phase_modal_content_class = "phase_create_edit_modal";
      document.getElementsByClassName(add_phase_modal_content_class)[0].style.display = "flex";
    }

    if(options.edit_phase){
      // people permissions
      if(people_unique_id[current_user]["permission_bits"].charAt(0) == '0'){
        close_modal();
        var user_alert_map_message = `<p>You currently <b>  DO NOT </b> have permissions to create a phase <br>
        Project Owner must edit your privliges in the project settings </p>`;
        map_message_ui(user_alert_map_message)
        return;

      }
      edit_phase = true;
      var add_phase_modal_content_class = "phase_create_edit_modal";
      document.getElementsByClassName(add_phase_modal_content_class)[0].style.display = "flex";
      //set phase name modal
      document.getElementById('modal_phase_name').value = phase_unique_id[current_clicked_phase_id]["name"];
      // set the header on the modal
      document.getElementById('phase_creation_edit_header').innerHTML = "Edit Phase";
      // remove subphase header and switch
      document.getElementById('sub_phase_modal_header').style.display = "none";
      document.getElementById('sub_phase_modal_switch').style.display = "none";

    }

    if(options.people_create){
      // put the edit ui up
      var elem = `<h1 style="margin:auto" >Create Person </h1>
                  <input id="people_edit_name" type="text" name="" value="" placeholder="name" style="margin: auto; margin-top: 20px;">
                  <input id="people_edit_email" type="email" name="" value="" placeholder="email" style="margin: auto; margin-top: 20px;">
                  <div style="display:flex; justify-content: space-around; ">
                    <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                    <div onclick="create_person()" class="pblack_button"><p>Save Person</p></div>
                  </div>`
      document.getElementsByClassName('people_edit_modal')[0].innerHTML = elem;
      document.getElementsByClassName('people_edit_modal')[0].style.display = "flex";

    }

    if(options.people_edit){
      // put the edit ui up
      var elem = `<h1 style="margin:auto" >Edit Person </h1>
                  <div id="delete_person_button_func" onclick="delete_person()" style="margin: auto; width: 21%;  margin-top: 20px;" class="pblack_button"><p>Delete Person</p></div>

                  <input id="people_edit_name" type="text" name="" value="" placeholder="name" style="margin: auto; margin-top: 20px;">
                  <input id="people_edit_email" type="email" name="" value="" placeholder="email" style="margin: auto; margin-top: 20px;">
                  <div style="display:flex; justify-content: space-around; ">
                    <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                    <div id="save_person_button_func" onclick="edit_person()" class="pblack_button"><p>Save Person</p></div>
                  </div>`
      document.getElementsByClassName('people_edit_modal')[0].innerHTML = elem;

      person_edit_id = options.people_edit
      document.getElementsByClassName('people_edit_modal')[0].style.display = "flex";
      // set person name
      document.getElementById('people_edit_name').value = people_unique_id[options.people_edit]["name"];
      // set person email
      document.getElementById('people_edit_email').value = people_unique_id[options.people_edit]["email"]

      // get rid of edit function if not project owner
      if(current_project_id != null && user_server_id != project_unique_id[current_project_id]["project_owner"]){
        document.getElementById('save_person_button_func').style.display = "none";
        document.getElementById('delete_person_button_func').style.display = "none";
      }

    }

    if(options.team_edit){
      var elem = `<h1 style="margin:auto" >Edit Team </h1>
                <div id="delete_team_button_func" onclick="delete_team()" style="margin: auto; width: 21%;  margin-top: 20px;" class="pblack_button"><p>Delete Team</p></div>
                <input id="team_edit_name" type="text" name="" value="" placeholder="name" style="margin: auto; margin-top: 20px;">
                  <div id="edit_team_list" class="options_members_list_team" style="margin:auto; margin-top:20px">

                  </div>
                  <div style="display:flex; justify-content: space-around; ">
                    <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                    <div id="save_team_button_func" onclick="edit_team()" class="pblack_button"><p>Save Team</p></div>
                  </div>`
      team_edit_id = options.team_edit;
      document.getElementsByClassName('team_edit_modal')[0].innerHTML = elem;
      document.getElementsByClassName('team_edit_modal')[0].style.display = "flex";
      document.getElementById('team_edit_name').value = team_unique_id[team_edit_id]["name"];
      //add people

      var team_member_list = "";
      for(const property in people_unique_id){
          if(people_unique_id[property]["deleted"] == "false" && people_unique_id[property]["project_id"] == current_project_id){
          var elm_ =  `<div id="${property}_edit" data="${property}" class="member_option_edit"><p class="member_option_text" data="${property}" >${people_unique_id[property]["name"]}</p></div>`
          team_member_list += elm_;
        }
      }
      // add people to html
      document.getElementById('edit_team_list').innerHTML = team_member_list;

        // add onclick function to people elements
        var element = document.getElementsByClassName('member_option_edit');
        for(var i=0;i<element.length;i++){
           element[i].addEventListener("click", function(e){

             if(team_member_edit_list.includes(e.target.getAttribute("data"))){
               // remove from actice list
              var index = team_member_edit_list.indexOf(e.target.getAttribute("data"));
              team_member_edit_list.splice(index,1);
              //set backgroundColor
              document.getElementById(e.target.getAttribute("data")+"_edit").style.backgroundColor = "white";
            }else{
              // add to active people list ;
                team_member_edit_list.push(e.target.getAttribute("data"));
                //set backgroundColor
                document.getElementById(e.target.getAttribute("data")+"_edit").style.backgroundColor = "grey";

            }
           }, false);
      }
      // click on users currently on the team

      for(var i = 0; i < user_teams[team_edit_id].length; i++){
        console.log(user_teams[team_edit_id][i])
        if(people_unique_id[user_teams[team_edit_id][i]]["deleted"] == "false" && people_unique_id[user_teams[team_edit_id][i]]["project_id"] == current_project_id){
          document.getElementById(user_teams[team_edit_id][i] + "_edit").click();
        }
      }

      // get rid of edit function if not project owner
      if(current_project_id != null && user_server_id != project_unique_id[current_project_id]["project_owner"]){
        document.getElementById('save_team_button_func').style.display = "none";
        document.getElementById('delete_team_button_func').style.display = "none";
      }

    }

    if(options.team_create){
      var elem = `<h1 style="margin:auto" >Create Team </h1>
                <input id="team_edit_name" type="text" name="" value="" placeholder="name" style="margin: auto; margin-top: 20px;">
                  <div id="edit_team_list" class="options_members_list_team" style="margin:auto; margin-top:20px">

                  </div>
                  <div style="display:flex; justify-content: space-around; ">
                    <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                    <div onclick="confirm_create_team()" class="pblack_button"><p>Save Team</p></div>
                  </div>`
      // team_edit_id = options.team_create;
      document.getElementsByClassName('team_edit_modal')[0].innerHTML = elem;
      document.getElementsByClassName('team_edit_modal')[0].style.display = "flex";
      // document.getElementById('team_edit_name').value = team_unique_id[team_edit_id]["name"];
      //add people

      var team_member_list = "";
      for(const property in people_unique_id){
          if(people_unique_id[property]["deleted"] == "false" && people_unique_id[property]["project_id"] == current_project_id){
          var elm_ =  `<div id="${property}_edit" data="${property}" class="member_option_edit"><p class="member_option_text" data="${property}" >${people_unique_id[property]["name"]}</p></div>`
          team_member_list += elm_;
        }
      }
      // add people to html
      document.getElementById('edit_team_list').innerHTML = team_member_list;


        // add onclick function to people elements
        var element = document.getElementsByClassName('member_option_edit');
        for(var i=0;i<element.length;i++){
           element[i].addEventListener("click", function(e){

             if(team_member_edit_list.includes(e.target.getAttribute("data"))){
               // remove from actice list
              var index = team_member_edit_list.indexOf(e.target.getAttribute("data"));
              team_member_edit_list.splice(index,1);
              //set backgroundColor
              document.getElementById(e.target.getAttribute("data")+"_edit").style.backgroundColor = "white";
            }else{
              // add to active people list ;
                team_member_edit_list.push(e.target.getAttribute("data"));
                //set backgroundColor
                document.getElementById(e.target.getAttribute("data")+"_edit").style.backgroundColor = "grey";
            }
           }, false);
      }

    }

    if(options.edit_project){
      if(options.edit_project != current_project_id){
        // project that is clicked is not the same change to that project
        change_project_ui(options.edit_project);
        return;
      }
      project_edit_id = options.edit_project;

      console.log("project",options.edit_project)
      // <div onclick="" style="width: 15%; margin-top: 10px; margin-left 5px; margin-right 5px;" class="pblack_button"><p>Start </p></div>
      // <div onclick="" style="width: 15%; margin-top: 10px; margin-left 5px; margin-right 5px;"  class="pblack_button"><p>Pause </p></div>
      // <div onclick="" style="width: 15%; margin-top: 10px; margin-left 5px; margin-right 5px;"  class="pblack_button"><p>End </p></div>
      var elem = `
      <h1 style="margin:auto" >Edit Project </h1>
      <div style="display:flex; justify-content: center; ">
        <div onclick="project_settings()" style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button"><p>Settings </p></div>
        <div onclick="delete_project('${options.edit_project}')" style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button"><p>Delete </p></div>
      </div>
      <h3 style="margin: auto; margin-top: 20px; " > Project Name</h3>
      <input id="project_edit_name" type="text" name="" value="${project_unique_id[options.edit_project]["name"]}" placeholder="Name" style="margin: auto; margin-top: 20px;    text-align: center;">
      <h3 style="margin: auto; margin-top: 20px;" >Project Members </h3>
      <div id="edit_team_list" class="options_members_list_team" style="margin:auto; margin-top:20px max-height: 116px;">
      ${people_permissions()}
      </div>

        <div style="display:flex; justify-content: space-around; ">
          <div onclick="close_modal()" style="margin-top:10px" class="pblack_button"><p>Cancel</p></div>
          <div onclick="edit_project()" style="margin-top:10px" class="pblack_button"><p>Save Project</p></div>
        </div>
        `
      document.getElementsByClassName('project_edit_modal')[0].innerHTML = elem;
      // add onclick function to people elements
      var element = document.getElementsByClassName('permissionbit');

      temp_people_unique_id = JSON.parse(JSON.stringify(people_unique_id));

      for(var i=0;i<element.length;i++){
         element[i].addEventListener("click", function(e){

           if(e.target.checked ){

             var index = parseInt(e.target.getAttribute("data"));
             var str = temp_people_unique_id[e.target.getAttribute("user")]["permission_bits"].split("");
             str[index] = "1";
             temp_people_unique_id[e.target.getAttribute("user")]["permission_bits"] = str.join('')

           }else{
             var index = parseInt(e.target.getAttribute("data"));
             var str = temp_people_unique_id[e.target.getAttribute("user")]["permission_bits"].split("");
             str[index] = "0";
             temp_people_unique_id[e.target.getAttribute("user")]["permission_bits"] = str.join('')

           }
           console.log(temp_people_unique_id[e.target.getAttribute("user")]["permission_bits"])

         }, false);
    }
      document.getElementsByClassName('project_edit_modal')[0].style.display = "flex";
      // go to project settings that matter to current user
      // needs better security
      if(current_project_id != null && user_server_id != project_unique_id[current_project_id]["project_owner"]){
        project_settings();
      }

    }

    if(options.create_project){

      var elem = `
      <h1 style="margin:auto" >Create Project </h1>
      <div style="display:flex; justify-content: space-around; ">

      </div>
      <h3 style="margin: auto; margin-top: 20px; " > Project Name</h3>
      <input id="project_edit_name" type="text" name="" value="" placeholder="Name" style="margin: auto; margin-top: 20px;    text-align: center;">

        <div style="display:flex; justify-content: space-around; ">
          <div onclick="close_modal()"  class="pblack_button"><p>Cancel</p></div>
          <div onclick="create_project()"  class="pblack_button"><p>Save Project</p></div>
        </div>
        `
      document.getElementsByClassName('project_edit_modal')[0].innerHTML = elem;
      // add onclick function to people elements
      document.getElementsByClassName('project_edit_modal')[0].style.display = "flex";
    }

}

function project_settings() {

  if(current_project_id != null && user_server_id == project_unique_id[current_project_id]["project_owner"]){
    var project_status_elms = `
    <div id="project_status_start" onclick="change_project_status('start',this)" style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;" class="pblack_button proj_status_button"><p>Start </p></div>
    <div id="project_status_pause" onclick="change_project_status('pause',this)" style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button proj_status_button"><p>Pause </p></div>
    <div id="project_status_end" onclick="change_project_status('end',this)" style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button proj_status_button"><p>End </p></div>
    `
  }else{
    var project_status_elms = `
    <div id="project_status_start"  style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;" class="pblack_button proj_status_button"><p>Start </p></div>
    <div id="project_status_pause"  style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button proj_status_button"><p>Pause </p></div>
    <div id="project_status_end"  style="width: 15%; margin-top: 10px; margin-left: 5px; margin-right: 5px;"  class="pblack_button proj_status_button"><p>End </p></div>
    `
  }

  var elem = `
  <h1 style="margin:auto" > Project Settings </h1>
  <!-- only show for project owner -->

  <div style="display:flex; justify-content: center; ">
  ${project_status_elms}
  </div>

  <h3 style="margin: auto; margin-top: 20px; " > Alerts</h3>

<div class="project_settings_alert_container" style="max-height: 200px; overflow-y:auto; margin:auto">
  <!--  email me only about tasks I am assigned to-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input id="project_setting_0"  type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p>Email me only about tasks I am assigned too</p>
  </div>

  <!--  email me when I'm assigned a new task-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input id="project_setting_1" type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p>Email me when I'm assigned a new task</p>
  </div>

  <!--  Remind me about uncompleted tasks every day-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input  id="project_setting_2" type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p>Remind me about uncompleted tasks every day</p>
  </div>

  <!--  Remind me about uncompleted tasks every week-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input  id="project_setting_3"  type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p> Remind me about uncompleted tasks every week</p>
  </div>

  <!--  email me when a story is written-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input  id="project_setting_4"  type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p> Email me when a story is written</p>
  </div>

  <!--  email me when a task is completed-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input  id="project_setting_5" type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p> Email me when a task is completed</p>
  </div>

  <!--  email me when task is offtrack-->
  <div  style=" display:flex; justify-content: start; align-items:center">
    <label  class="switch ">
      <input id="project_setting_6"  type="checkbox" >
      <span class="slider round"></span>
  </label>
  <p> Email me when task is offtrack</p>
  </div>
</div>

    <div style="display:flex; justify-content: space-around; ">
      <div onclick="close_modal()" style="margin-top:10px" class="pblack_button"><p>Cancel</p></div>
      <div onclick="save_project_project()" style="margin-top:10px" class="pblack_button"><p>Save Settings</p></div>
    </div>
    `
    document.getElementsByClassName('project_edit_modal')[0].innerHTML = elem;



    // show users alert settings
    for(var i =0; i < people_unique_id[current_user]["alert_settings"][current_project_id].length; i++){
      if(people_unique_id[current_user]["alert_settings"][current_project_id][i] == "1"){
        document.getElementById('project_setting_' + i.toString()).checked = true;
      }else{
        document.getElementById('project_setting_' + i.toString()).checked = false;
      }
    }
    // show project status
    console.log('project_status_' + project_unique_id[current_project_id]["status"] )
    document.getElementById('project_status_' + project_unique_id[current_project_id]["status"] ).style.backgroundColor = "grey";
}

var temp_project_status = null;
function change_project_status(status,e) {
  // change the status of project visually by changing all of the items a certain color
  // save the status of the project as well
  var class_name = "proj_status_button";
  var elements = document.getElementsByClassName(class_name);
  for(var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = "black";
  }
  e.style.backgroundColor = "grey";
  temp_project_status = status;

}

function save_project_project() {
  // loop through ids and get the checked value, add to string
  var user_alert_settings = ""
  for(var i =0; i < project_unique_id[current_project_id]["alert"]; i++){
    if(document.getElementById('project_setting_' + i.toString()).checked){
      user_alert_settings += "1";
    }else{
      user_alert_settings += "0";
    }
  }
  console.log("user_alert_settings",user_alert_settings)
  // save alert string to user
  people_unique_id[current_user]["alert_settings"][current_project_id] = user_alert_settings;

  // save project status
  if (temp_project_status != null){
    project_unique_id[current_project_id]["status"] = temp_project_status;
  }
  //refresh temp_project_status
  close_modal();
}

function delete_project(project_id_delete){
  var delete_project_ui = `
              <h1 style="margin:auto" >Delete Team </h1>
              <h3 style="margin:auto; margin-top: 20px;" >${project_unique_id[project_id_delete]["name"]}</h3>

              <div style="display:flex; justify-content: space-around; ">
                <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                <div onclick="confirm_delete_project('${project_id_delete}')" class="pblack_button"><p>Delete Team</p></div>
              </div>
              `
  document.getElementsByClassName('project_edit_modal')[0].innerHTML = delete_project_ui;

}

function confirm_delete_project(project_id_delete){
  // get the project name
  project_unique_id[project_id_delete]["deleted"] = "true";
  project_unique_id[project_id_delete]["status"] = "pause";
  project_unique_id[project_id_delete]["shared"] = "false";
  current_project_id = null;

  startup();

  close_modal();
}

var temp_people_unique_id = null;
function people_permissions(){
  var res = "";
  for (const user in people_unique_id ){
    if(people_unique_id[user]["project_id"] == current_project_id){
      var people_per =  `<div id="${user}_edit_permission" data="${user}" class="member_option_edit"><p style="margin-bottom:30px" class="member_option_text" data="${user}" >${people_unique_id[user]["name"]}</p></div>

                        <div  style="margin-bottom:10px; margin-top:5px;">

                        <input class ="permissionbit"  type="checkbox"  user="${user}" data="0" name="${user}phase_bit" value="" ${person_per_bits(user,0)}>
                        <label for="${user}phase_bit"> Create/Edit Phase</label><br>
                        <input class ="permissionbit"  type="checkbox"  user="${user}" data="1"  name="${user}task_bit" value="" ${person_per_bits(user,1)}>
                        <label for="${user}task_bit"> Create/Edit Task</label><br>
                        <input class ="permissionbit"  type="checkbox" user="${user}" data="2"  name="${user}story_bit" value="" ${person_per_bits(user,2)}>
                        <label for="${user}story_bit"> Create/Edit Story</label><br>
                        </div>
      `
      res += people_per;
    }
  }

  return res;
}

function person_per_bits(person_id,index) {
  if(people_unique_id[person_id]["permission_bits"][index] == "1"){
    return "checked"
  }
  return ""

}

var project_alert_count = 7;
var project_edit_id = null;
function create_project_id() {

    while (true){
      var rand_id = getRandomArbitrary(0, 5000000000000);
      if(!(rand_id.toString() in project_unique_id)){
        //might want to make sure task id is not a phase id
        break;
      }
    }
    return rand_id.toString();
}
function create_project() {
  if(document.getElementById('project_edit_name').value == ""){
    error_modal("Project needs a name");
    return;
  }
  var new_project_id = create_project_id();
  // get the project name
  project_unique_id[new_project_id] = {"name": document.getElementById('project_edit_name').value, "shared":"false", "deleted":"false", "status":"pause"};
  project_unique_id[new_project_id]["project_owner"] = user_server_id;
  project_unique_id[new_project_id]["alert"] = project_alert_count;
  // updat project_scheme
  project_schemes[new_project_id] = {"begin":[]}

  // create product owner
  var person_created_id = create_person_id()
   people_unique_id[person_created_id] = {}
   // set person name
   people_unique_id[person_created_id]["name"] =   "User name from server id ";
   // set person email
   people_unique_id[person_created_id]["email"] =  "useremail@.com"
   people_unique_id[person_created_id]["deleted"] =  "false";
   people_unique_id[person_created_id]["project_id"] = new_project_id;
   people_unique_id[person_created_id]["permission_bits"] = "111";
   people_unique_id[person_created_id]["alert_settings"]= {};
   people_unique_id[person_created_id]["alert_settings"][new_project_id] = "0111111";

   people_unique_id[person_created_id]["server_id"] = user_server_id;

  main_projects_ui();
  console.log(document.getElementById(new_project_id))

  setTimeout(go_to_project_after_creation(new_project_id +"_project_card"),1000);
  close_modal();

}

function edit_project() {
  if(document.getElementById('project_edit_name').value == ""){
    error_modal("Project needs a name");
    return;
  }
  // get the project name
  project_unique_id[project_edit_id]["name"] = document.getElementById('project_edit_name').value;
  // set the perission bits\
  people_unique_id = JSON.parse(JSON.stringify(temp_people_unique_id));
  pre_pop_setup();
  populate_project_map(current_project_id,current_sub_phase);
  main_projects_ui();
  close_modal();
}

/////
/////

function create_team_id() {

    while (true){
      var rand_id = getRandomArbitrary(0, 5000000000000);
      if(!(rand_id.toString() in team_unique_id)){
        //might want to make sure task id is not a phase id
        break;
      }
    }
    return rand_id.toString();
}

function confirm_create_team() {
  if(document.getElementById('team_edit_name').value == ""){
    error_modal("Teams need a name");
    return;
  }
  if(team_member_edit_list.length == 0){
    error_modal("Teams need a least one person");
    return;
  }
 var new_team_id = create_team_id();
 user_teams[new_team_id] = team_member_edit_list.slice();
 team_unique_id[new_team_id] = {"name": document.getElementById('team_edit_name').value, "deleted":"false", "project_id": current_project_id};
 populate_teams_ui();
 close_modal();
}

var team_member_edit_list = [];
var team_edit_id = null;
function edit_team(){
  if(document.getElementById('team_edit_name').value == ""){
    error_modal("Teams need a name");
    return;
  }
  if(team_member_edit_list.length == 0){
    error_modal("Teams need a least one person");
    return;
  }
  team_unique_id[team_edit_id]["name"] =  document.getElementById('team_edit_name').value
  user_teams[team_edit_id] = team_member_edit_list.slice();
  console.log("edit team",team_edit_id);
  document.getElementById('edit_team_list').innerHTML = "";
  close_modal();
}

function delete_team(){
  var delete_person_ui = `
              <h1 style="margin:auto" >Delete Team </h1>
              <h3 style="margin:auto; margin-top: 20px;" >${team_unique_id[team_edit_id]["name"]}</h3>

              <div style="display:flex; justify-content: space-around; ">
                <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                <div onclick="confirm_delete_team()" class="pblack_button"><p>Delete Team</p></div>
              </div>
              `
  document.getElementsByClassName('team_edit_modal')[0].innerHTML = delete_person_ui;

}

function confirm_delete_team() {
  console.log("delete team")
  team_unique_id[team_edit_id]["deleted"] = "true";
  populate_teams_ui();
  close_modal();
}


////////////////////////////////////
////////////////////////////////////

var person_edit_id = null;
function edit_person(){
  if (document.getElementById('people_edit_name').value == "" || document.getElementById('people_edit_email').value  == "" ){
    error_modal("Name and Email must be Listed");
    return;
  }
  if(!document.getElementById('people_edit_email').value.includes("@") ){
    error_modal("Must have a valid email");
    return;
  }
  // ensure  user mails are different for project
  for(const people in people_unique_id ){
    // find project person with same server id, not deleted, specific to project
    if(people != person_edit_id && people_unique_id[people]["email"] == document.getElementById('people_edit_email').value && people_unique_id[people]["deleted"] == "false" && people_unique_id[people]["project_id"] == current_project_id){
      error_modal("Project user emails must be different");
      return;
    }
  }
  // set person name
 people_unique_id[person_edit_id]["name"] =   document.getElementById('people_edit_name').value;
  // set person email
  people_unique_id[person_edit_id]["email"] =  document.getElementById('people_edit_email').value;
  populate_people_ui();
  close_modal();
}

function delete_person(){
  console.log("delete_person");
  var delete_person_ui = `
              <h1 style="margin:auto" >Delete Person </h1>
              <h3 style="margin:auto; margin-top: 20px;" >${people_unique_id[person_edit_id]["name"]}</h3>

              <div style="display:flex; justify-content: space-around; ">
                <div onclick="close_modal()" class="pblack_button"><p>Cancel</p></div>
                <div onclick="confirm_delete_person()" class="pblack_button"><p>Delete Person</p></div>
              </div>
              `
  document.getElementsByClassName('people_edit_modal')[0].innerHTML = delete_person_ui;
}

function confirm_delete_person(){
  console.log(people_unique_id[person_edit_id]["server_id"],project_unique_id[current_project_id]["project_owner"])
  if( people_unique_id[person_edit_id]["server_id"]  == project_unique_id[current_project_id]["project_owner"]){
    error_modal("Project Owner cannot be deleted");
    return;
  }

  // delete stories owned by person
  // delete user from all tasks if user is only person delete task
  people_unique_id[person_edit_id]["deleted"] = "true";
  populate_people_ui();
  close_modal();
}

function create_person() {
  if(current_project_id == null){
    error_modal("Please select a project");
    return;
  }

  if (document.getElementById('people_edit_name').value == "" || document.getElementById('people_edit_email').value  == "" ){
    error_modal("Name and Email must be Listed");
    return;
  }
  if(!document.getElementById('people_edit_email').value.includes("@") ){
    error_modal("Must have a valid email");
    return;
  }
  // ensure  user mails are different for project
  for(const people in people_unique_id ){
    console.log("email",people_unique_id[people]["email"],document.getElementById('people_edit_email').value)
    // find project person with same server id, not deleted, specific to project
    if(people_unique_id[people]["email"] == document.getElementById('people_edit_email').value && people_unique_id[people]["deleted"] == "false" && people_unique_id[people]["project_id"] == current_project_id){
      error_modal("Project user emails must be different");
      return;
    }
  }
 var person_created_id = create_person_id()
  people_unique_id[person_created_id] = {}
  // set person name
  people_unique_id[person_created_id]["name"] =   document.getElementById('people_edit_name').value;
  // set person email
  people_unique_id[person_created_id]["email"] =  document.getElementById('people_edit_email').value;
  people_unique_id[person_created_id]["deleted"] =  "false";
  people_unique_id[person_created_id]["project_id"] = current_project_id;
  people_unique_id[person_created_id]["permission_bits"] = "111";
  people_unique_id[person_created_id]["alert_settings"]= {};
  people_unique_id[person_created_id]["alert_settings"][current_project_id] = "0111111";
  people_unique_id[person_created_id]["server_id"] = "";
  populate_people_ui();
  close_modal();
}




function refresh_locks(){

}

function release_lock(){

}



function expand_card(card_id,img_elm){
  // in plain js

  var card_elm =  document.getElementById(card_id);
  var expand_class = "expand_container";

  if(card_elm.classList.contains(expand_class)){
    card_elm.classList.remove(expand_class);

    img_elm.src="img/ProjectMap/expand.svg";

  }else{
     card_elm.classList.add(expand_class);
     img_elm.src="img/ProjectMap/minimize.svg";


  }
  force_redraw_task_container(document.getElementById('phase_task_list_container'));
  force_redraw_task_container(document.getElementById('task_view_ui_task_container'));

}

function force_redraw_task_container(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}


var sub_phase_elm = [];
function toggle_project_sub_phase_container(project_id){

  var sub_phase_container = "_project_sub_phase_container"
  var project_arrow_indicator = "_arrow";
  var sub_phase_container_elm = document.getElementById(project_id + sub_phase_container);
  var project_arrow_elm =  document.getElementById(project_id + project_arrow_indicator);

  if(!sub_phase_elm.includes(project_id)){
    // num elements in container * constant = height
    var numberOfChildren = sub_phase_container_elm.childElementCount;
    var constant = 80;
    var elm_height = numberOfChildren * constant;
    var unit = "px";
    var res = elm_height + unit;
    sub_phase_container_elm.style.height = elm_height + unit;
    project_arrow_elm.style.transform = 'rotate(180deg)';
    sub_phase_elm.push(project_id);
  }else{
    sub_phase_container_elm.style.height = "0px";
    project_arrow_elm.style.transform = 'rotate(0deg)';
    sub_phase_elm.splice(sub_phase_elm.indexOf(project_id), 1);

  }
  // debug help
  console.log(sub_phase_elm);

}


var story_elm = []; // contains the task id,  not story elem, used to controll toggle containers
var task_story_dropdown = []; // contains to tacks currently cliked on
// refresh on any taskview or phaseview rerender, force rerender

function toggle_story_container(task_id){
  // keep track of containers clicked on
  if(task_story_dropdown.includes(task_id)){
    task_story_dropdown.splice( task_story_dropdown.indexOf(current_story_task_id_ui),1);
  }else{
    task_story_dropdown.push(task_id);
  }

  var story_container = "_story_container"
  var story_arrow_indicator = "_arrow";
  var story_container_elm = document.getElementById(task_id + story_container);
  var story_arrow_elm =  document.getElementById(task_id + story_arrow_indicator);

  if(!story_elm.includes(task_id)){
    // num elements in container * constant = height
    var numberOfChildren = story_container_elm.childElementCount;
    var constant = 300;
    var elm_height = numberOfChildren * constant;
    var unit = "%";
    var res = elm_height + unit;
    var res = "auto";
    story_container_elm.style.height = res;
    story_arrow_elm.style.transform = 'rotate(180deg)';
    story_elm.push(task_id);
  }else{
    story_container_elm.style.height = "0px";
    story_arrow_elm.style.transform = 'rotate(0deg)';
    story_elm.splice(sub_phase_elm.indexOf(task_id), 1);

  }
  // debug help
  console.log(story_elm);

}


var project_options_counter = 0;
var dir = 1;
var k = 0;
function toggle_project_options() {
  cy.animate({
  fit: {
    eles: cy.nodes(),
    padding: 50
  }
}, {
  duration: 250
});
  // function to move project option buttons in and out of user view
  var j = setInterval(function(){

      // classnames of the buttons to move
      var array = ["project_menu_button","project_phase_view_button","project_task_view_button","project_report_button"]
      // direction heights of buttons on move
      var heights_up = ["10%","20%","30%","40%"]
      var heights_down = ["10px","10px","10px","10px"]


      if (dir == 1 && project_options_counter == array.length){
        clearInterval(j);
        dir = 0;
      }
      if (dir == 0 && project_options_counter == -1){
        clearInterval(j);
        dir = 1;
      }
      class_name = array[project_options_counter]
      // debug help
       // console.log(class_name, project_options_counter,k, dir)
      if(dir == 1){
        var cols = document.getElementsByClassName(class_name);
           for(i=0; i<cols.length; i++) {
             cols[i].style.bottom = heights_up[k];
           }

           k += 1;
           project_options_counter += 1;
      }else{
        var cols = document.getElementsByClassName(class_name);
           for(i=0; i<cols.length; i++) {
             cols[i].style.bottom = heights_down[k];
           }
           k -= 1;
           project_options_counter -= 1;
      }

  }, 150);

}

// width: 70vw;
//    z-index: 40;
var poject_menu_width = 1;
function toggle_project_menu_width(){
  var class_name = "project_menu";
  var cols = document.getElementsByClassName(class_name);
  if (poject_menu_width == 1){
    for(i=0; i<cols.length; i++) {
      cols[i].classList.add("project_menu_width_tog");
    }
    poject_menu_width = 0;
  }else{
    for(i=0; i<cols.length; i++) {
      cols[i].classList.remove("project_menu_width_tog");
    }
    poject_menu_width = 1;
  }

}

var phase_view = 1;
var task_view = 0;
function toggle_phase_view(){
  var class_name = "card";
  var cols = document.getElementsByClassName(class_name);

  if(phase_view == 1){// phase view is on turn it off

    // clear out phase view, of task so ids don't overlap with the task view
    current_clicked_phase_id = null;
    // remove the colored phase node from map if there
    pre_pop_setup();
    populate_project_map(current_project_id, current_sub_phase);
    create_phase_task_ui(null);
    for(i=0; i<cols.length; i++) {
      cols[i].style.bottom = "-100px";
      cols[i].style.zIndex = "-1";
      cols[i].style.opacity = "0";
    }
    phase_view = 0;

  }else{
    if(task_view){

      toggle_task_view();
    }
    for(i=0; i<cols.length; i++) {


      console.log("closed task view ",cols[i])
      cols[i].style.bottom = "20px";
      cols[i].style.zIndex = "1";
      cols[i].style.opacity = "1";
    }
    phase_view = 1;
  }
  // debug help
  // console.log("to task_view",task_view,"phase_view",phase_view,cols);

}

function toggle_task_view(){
  var class_name = "card2";
  var cols = document.getElementsByClassName(class_name);

  // debug  help
  // console.log("from task_view",task_view,"phase_view",phase_view,cols)

  if(task_view == 1){
    // task vie is displaying turn it off
    create_task_view_ui(on = false);
    for(i=0; i<cols.length; i++) {
      cols[i].style.visibility = "visible";
      cols[i].style.opacity = "0";
      cols[i].style.bottom = "-100px";
      cols[i].style.zIndex = "-1";

    }
    task_view = 0;

  }else{
    //brig up task view
    if(phase_view){
      // turn off phase view if it's on
      toggle_phase_view();
    }
    // finish bringing on task view
    for(i=0; i<cols.length; i++) {
      cols[i].style.visibility = "visible";
      cols[i].style.opacity = "1";
      cols[i].style.bottom = "20px";
      cols[i].style.zIndex = "1";

    }
     create_task_view_ui(on = true);// remove tasks from task view
    task_view = 1;
  }
  //debug help
  // console.log("to task_view",task_view,"phase_view",phase_view,cols);
}
