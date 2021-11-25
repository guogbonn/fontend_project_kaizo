


function convertUTCTimestampDateToLocalDate(timestamp){
  console.log("sec", Math.floor((new Date()).getTime()/1000))
  console.log(timestamp, parseInt(new Date().getTimezoneOffset()));
  var date = new Date();
  var offset = date.getTimezoneOffset();
  if (offset >0){
    var curr_time = timestamp - (offset * 60 * 1000 )

  }else{
    curr_time = timestamp + (offset * 60 * 1000  )
  }
  var res_date = new Date(curr_time).toUTCString();
  // console.log(new Date(curr_time).getHours())
  console.log(res_date) // has been corrected for timezone
  return res_date;
}
function convertUTCTimestampDateToLocalDate_return_timestamp(timestamp){
  console.log("sec", Math.floor((new Date()).getTime()/1000))
  console.log(timestamp, parseInt(new Date().getTimezoneOffset()));
  var date = new Date();
  var offset = date.getTimezoneOffset();
  if (offset >0){
    var curr_time = timestamp - (offset * 60 * 1000 )

  }else{
    curr_time = timestamp + (offset * 60 * 1000  )
  }
  var res_date = new Date(curr_time)
  // console.log(new Date(curr_time).getHours())
  console.log(res_date) // has been corrected for timezone
  return res_date;
}

// get the current time now

function convertUTCtimestamptoTimezoneAwareUTC(timestamp){
  console.log("before timezone", ui_time(convertUTCTimestampDateToLocalDate( timestamp)) )
  ui_time_2(convertUTCTimestampDateToLocalDate(timestamp * 1000))
  var date = new Date();
  var offset = date.getTimezoneOffset();
  if (offset <0){
    var curr_time = timestamp - (offset * 60 * 1000 )

  }else{
    curr_time = timestamp + (offset * 60 * 1000  )
  }

  console.log("after timezone", ui_time(convertUTCTimestampDateToLocalDate( curr_time)) )


  return curr_time
}
var timest = Math.floor((new Date()).getTime())
// timest= timest +( 5 * 60)  add five mins to current time
// timest * 1000
// > var d1 = new Date();
// > d1.toUTCString();
// "Sun, 18 Mar 2012 05:50:34 GMT" // two hours less than my local time
// > Math.floor(d1.getTime()/ 1000)
// 1332049834
//Date.UTC(year, month, day, hour, minute, second)

var d1 = Date.UTC(2021,9,6,21,47,16); // user defined date is timezone specific
d1 = convertUTCtimestamptoTimezoneAwareUTC(d1);
// console.log(d1, timest * 1000,(timest * 1000) - d1)
convertUTCTimestampDateToLocalDate(timest)

function sanitizeHTML(text) {
  var element = document.createElement('div');
  element.innerText = text;
  return element.innerHTML;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function ui_time(date_string){
  console.log(
    "ui time input",date_string
  )
  // take in a convertUTCTimestampDateToLocalDate and convert to approiate ui
  var date_string_arr = date_string.split(" "); // ex. Fri, 08 Oct 2021 09:36:02 GMT
  var time_string = date_string_arr[4];
  var hour_min_string = time_string.slice(0, 5);
  var hour_min_arr = hour_min_string.split(":");
  var time_of_day = hour_am_pm_dict[hour_min_arr[0]]
  console.log("b",hour_min_arr[0]);
  hour_min_arr[0] = hour_min_arr[0].replace(/\s+/g, '');
  if (hour_min_arr[0] in hour_conv_dict){
    console.log("true")
    var final_hour = hour_conv_dict[hour_min_arr[0]];
  }else{
    console.log("false")

    var final_hour = hour_min_arr[0].slice(1,hour_min_arr[0].length)
  }
    console.log("a",final_hour);

  if(date_string_arr[1][0] == 0){ // check if the first char of day is 0
    var final_day = date_string_arr[1].slice(1,date_string_arr[0].length);
  }else{
    var final_day = date_string_arr[1];
  }
  var final_time_string = date_string_arr[0] + ' ' + final_day + ' ' + date_string_arr[2] + ' ' + date_string_arr[3] + ' ' + final_hour + ':' + hour_min_arr[1] + ' ' + time_of_day;
  console.log(
    "ui time output",final_time_string
  )

  return final_time_string;
}

function ui_time_2(date_string){
  console.log(
    "ui_2 time input",date_string
  )
  // take in a convertUTCTimestampDateToLocalDate and convert to approiate ui
  var date_string_arr = date_string.split(" "); // ex. Fri, 08 Oct 2021 09:36:02 GMT
  var time_string = date_string_arr[4];
  var hour_min_string = time_string.slice(0, 5);
  var hour_min_arr = hour_min_string.split(":");
  var time_of_day = hour_am_pm_dict[hour_min_arr[0]]
  if (hour_min_arr[0] in hour_conv_dict){
    var final_hour = hour_conv_dict[hour_min_arr[0]];
  }else{
    var final_hour = hour_min_arr[0].slice(1,hour_min_arr[0].length)
  }

  if(date_string_arr[1][0] == 0){ // check if the first char of day is 0
    var final_day = date_string_arr[1].slice(1,date_string_arr[0].length);
  }else{
    var final_day = date_string_arr[1];
  }
  var final_time_string =  date_string_arr[2]+' '+  final_day + ', ' + final_hour + ':' + hour_min_arr[1] + ' ' + time_of_day
  console.log(
    "ui_2 time output",final_time_string
  )
  return final_time_string;
}

function recur_duration(n,sum,times,collection) {
  if (n == times.length){
    return;
  }
  while(sum - times[n] >=0){
    sum = sum - times[n];
    collection.push(n);
  }
  recur_duration(n+1,sum,times,collection)



}


function ending_s(val){
  if (val >1){
    return 's'
  }else{
    return ''
  }
}
function ui_duration(start_time, endtime){
  // what is this used for?
  var times = [604800,86400,3600,60,1]; // weeks days, hours, min, seconds
  var freq = {}
  var collection = [];
  var res = ""
  recur_duration(0,endtime- start_time,times,collection);
  for(var i = 0; i < collection.length; i++){
    if (!(collection[i] in freq)){
      freq[collection[i]] = 1;
    }else{
      freq[collection[i]] += 1
    }
  }
  if (0 in freq){
    res += ' ' + freq[0].toString() + ' Week'+ending_s(freq[0]);
  }
  if (1 in freq){
    res += ' ' +  freq[1].toString() + ' Day'+ending_s(freq[1]);
  }
  if (2 in freq){
    res += ' ' + freq[2].toString() + ' Hour'+ending_s(freq[2]);
  }
  if (3 in freq){
    res += ' ' + freq[3].toString() + ' Min'+ending_s(freq[3]);
  }
  if (4 in freq){
    res += ' ' + freq[4].toString() + ' Second'+ending_s(freq[4]);
  }
  return res;
}

function reorder_group_count(start,list_phase_group,count) {
  // after adding a new phase the goup count might be off and a reordering is need
  // dfs carrying count to decendents
  if(start){
    var phase_print_list = JSON.parse(JSON.stringify(project_schemes[current_project_id]))
    console.log("reorder_group_count scheme",phase_print_list, JSON.parse(JSON.stringify(phase_unique_id)))
  }

  for( var i =0; i < list_phase_group.length; i++){


    for(var j = 0; j < list_phase_group[i].length; j++){
      phase_unique_id[list_phase_group[i][j][0]]["phase_group_index"] = count;
      if(list_phase_group[i][j][0] in project_schemes[current_project_id] ){
        reorder_group_count(false,project_schemes[current_project_id][list_phase_group[i][j][0]],count);      }
    }
    if(start){
      count += 1
    }

  }

  if(start){
    var phase_print_list = JSON.parse(JSON.stringify(project_schemes[current_project_id]))
    console.log("reorder_group_count scheme",phase_print_list, JSON.parse(JSON.stringify(phase_unique_id)))
  }
}

function get_phase_group_date_range(phase_group) {
  console.log("phase_group",phase_group);

  var min_date = 3000000000000000000;
  var max_date = 0;
  var start_time = "N/A";
  var end_time = "N/A";
  for(var i =0; i < phase_group.length; i++){
    console.log("phase_group",phase_unique_id[phase_group[i][0]]["name"])
    if(phase_group[i][1] != null){

      min_date = Math.min(phase_group[i][1],min_date);
    }
      if(phase_group[i][2] != null){
        max_date = Math.max(phase_group[i][2],max_date);
      }

  }
  if(min_date !=3000000000000000000){
    console.log("min_date")

    start_time =ui_time_2(convertUTCTimestampDateToLocalDate(min_date * 1000))
  }
  if(max_date != 0 ){
    console.log("max_date")
    end_time = ui_time_2(convertUTCTimestampDateToLocalDate(max_date * 1000));
  }
  console.log()
  return `${start_time} - ${end_time}`;

}

function pre_pop_setup() {
  cy.remove( cy.elements('edge') );
  cy.remove( cy.elements('node') );
  cy.removeListener('tap'); // get rid of double event
}


function update_time_sub_phase(phase_list) {
  console.log(phase_list)
  var start_time = 900000000000000000000;
  var end_time = 0;
  for (var i = 0; i < phase_list.length; i++){
    for(var j = 0; j < phase_list[i].length; j++){
      // possibly could break here because we do not check if phase_list has an j index
      if (phase_list[i][j][1] != null){
        start_time = Math.min(phase_list[i][j][1],start_time)

      }
      if(phase_list[i][j][2] != null){
        end_time = Math.max(phase_list[i][j][2],end_time)
      }
      }
    }
    console.log(start_time,end_time)
    return [start_time, end_time]
}

function update_project_scheme_time(phase_list = null) {

  // go through phase group  list
  // update phase in project scheme and time range if it is real by going through it's tasks  times and getting the range
  // update dfs on sub phase
  // on back track update sub phase time with update_time_sub_phase
  var ending = false;
  if(phase_list == null){
    ending = true;
    var phase_list =  project_schemes[current_project_id]["begin"]
    // console.log("beginning",phase_list);
    var phase_print_list = JSON.parse(JSON.stringify(project_schemes[current_project_id]))
    console.log("beginning scheme",phase_print_list, JSON.parse(JSON.stringify(phase_unique_id)))
  }

    for (var i = 0; i < phase_list.length; i++){
      for(var j = 0; j < phase_list[i].length; j++){
        // possibly could break here because we do not check if phase_list has an j index
        if(  phase_unique_id[phase_list[i][j][0]]["type"] == "real"){
          var start_time = 900000000000000000000;
          var end_time = 0;
          for(var k = 0; k <  phase_unique_id[phase_list[i][j][0]]["tasks"].length ; k++){
            console.log(phase_unique_id[phase_list[i][j][0]] , "-< tasks ->",phase_unique_id[phase_list[i][j][0]]["tasks"][k])
            start_time = Math.min(start_time,phase_unique_id[phase_list[i][j][0]]["tasks"][k][1])
            end_time = Math.max(end_time,phase_unique_id[phase_list[i][j][0]]["tasks"][k][2])

            // phase_group_start_time = Math.min(phase_group_start_time,phase_unique_id[phase_list[i][j][0]]["tasks"][k][1])
            // phase_group_end_time = Math.max(phase_group_end_time,phase_unique_id[phase_list[i][j][0]]["tasks"][k][2])
          }
          if (start_time == 900000000000000000000 && end_time == 0){
            phase_list[i][j][1] = null
            phase_list[i][j][2] = null
            phase_unique_id[phase_list[i][j][0]]["time_range"][0] =  null;
            phase_unique_id[phase_list[i][j][0]]["time_range"][1] =  null;
          }else{
            phase_list[i][j][1] = start_time;
            phase_list[i][j][2] = end_time;
            phase_unique_id[phase_list[i][j][0]]["time_range"][0] =  start_time;
            phase_unique_id[phase_list[i][j][0]]["time_range"][1] =  end_time;

          }
        }

        if(phase_unique_id[phase_list[i][j][0]]["type"] == "sub" ){
          console.log(phase_unique_id[phase_list[i][j][0]] , "sub phase")

            update_project_scheme_time(project_schemes[current_project_id][phase_list[i][j][0]])
            var res = update_time_sub_phase(project_schemes[current_project_id][phase_list[i][j][0]])
            console.log("sub ans",res)
            if(res[0] !=900000000000000000000 && res[1] != 0 ){
              phase_list[i][j][1] = res[0];
              phase_list[i][j][2] = res[1];
              phase_unique_id[phase_list[i][j][0]]["time_range"][0] =   res[0];
              phase_unique_id[phase_list[i][j][0]]["time_range"][1] =  res[1];
            }else{
              phase_list[i][j][1] = null;
              phase_list[i][j][2] = null;
              phase_unique_id[phase_list[i][j][0]]["time_range"][0] =  null;
              phase_unique_id[phase_list[i][j][0]]["time_range"][1] = null;
            }

          }
        }
      }
        // console.log("ending",phase_list)

        if(ending){
          console.log("beginning scheme after",JSON.parse(JSON.stringify(project_schemes[current_project_id])),JSON.parse(JSON.stringify(phase_unique_id)))
        }


    }


    function find_phase_to_delete(phase_list,phase_to_delete) {
      console.log("find_phase_to_delete",phase_list,phase_to_delete)
      // create ordered list of phase ids of the current project
      //    var phase_list = project_schemes[current_project_id]["begin"];

      for (var i = 0; i < phase_list.length; i++){
        for(var j = 0; j < phase_list[i].length; j++){
          // possibly could break here because we do not check if phase_list has an j index
          if(  phase_list[i][j][0] == phase_to_delete){

            console.log("found phase",phase_list[i][j][0],phase_list[i])
            phase_list[i].splice(j, 1);
            console.log("splice")
            // ensure that if the first phase group is empty we reove the phase group
            if(phase_list[i].length == 0){
            phase_list.splice(i,1);
            }
            console.log(phase_list[i]);
            return true;;
          }
          if(phase_list[i][j][0] in project_schemes[current_project_id] ){
            if(find_phase_to_delete(project_schemes[current_project_id][phase_list[i][j][0]],phase_to_delete)){
              return true;
            }
          }
        }
      }
      return false;

    }
function delete_phase_helper(phase_to_delete){
  console.log("delete_phase_helper");


    var task_id_to_delete = [];
    var story_id_to_delete = [];

    // delete phase tasks
    for(var i = 0; i < phase_unique_id[phase_to_delete]["tasks"].length; i++){

      task_id_to_delete.push(phase_unique_id[phase_to_delete]["tasks"][i][0]);
      var story_list = task_unique_id[phase_unique_id[phase_to_delete]["tasks"][i][0]]["Stories"];
      console.log(story_list)
      for(var j = 0; j < story_list.length; j++){
        story_id_to_delete.push(story_list[j][0])
      }
    }
    for(var i = 0; i < task_id_to_delete.length; i++){
      delete task_unique_id[task_id_to_delete[i]]
    }
    for(var i = 0; i < story_id_to_delete.length; i++){
      delete story_unique_id[story_id_to_delete[i]]
    }


    // delete phase in project scheme
    find_phase_to_delete(project_schemes[current_project_id]["begin"],phase_to_delete)

    //delete phase
    delete phase_unique_id[phase_to_delete];

    current_clicked_phase_id = null;
    console.log("delete",task_id_to_delete,story_id_to_delete);

  }


  function delete_task_helper(phase_to_delete, task_to_delete_id, delete_story = null){
    console.log("delete_task_helper");


      var task_id_to_delete = [];
      var story_id_to_delete = [];

      // delete phase tasks
      for(var i = 0; i < phase_unique_id[phase_to_delete]["tasks"].length; i++){
        if(phase_unique_id[phase_to_delete]["tasks"][i][0] ==task_to_delete_id){
          console.log("compare task id",phase_unique_id[phase_to_delete]["tasks"][i][0],task_to_delete_id)
          task_id_to_delete.push(phase_unique_id[phase_to_delete]["tasks"][i][0]);
          var story_list = task_unique_id[phase_unique_id[phase_to_delete]["tasks"][i][0]]["Stories"];
          console.log(story_list)
          for(var j = 0; j < story_list.length; j++){
            story_id_to_delete.push(story_list[j][0])
          }
          phase_unique_id[phase_to_delete]["tasks"].splice(i,1);

          break;
        }

      }
      for(var i = 0; i < task_id_to_delete.length; i++){
        delete task_unique_id[task_id_to_delete[i]]
      }
      if(delete_story != null){
        for(var i = 0; i < story_id_to_delete.length; i++){
          delete story_unique_id[story_id_to_delete[i]]
        }
      }


      console.log("delete",task_id_to_delete,story_id_to_delete);

    }

function initials(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

function project_initals(string){
  if(string.length>5){
  return string.slice(0,6) + "..."
  }
  return string
}
