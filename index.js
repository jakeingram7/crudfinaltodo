function sendRequest() {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("responseOutput").innerHTML = this.responseText;

        }
    };
    xhttp.open("POST", "https://jakescrud.free.beeceptor.com    ", true);
    xhttp.send();
}

var app = new function() {
    this.el = document.getElementById('tasks');
  
    this.tasks = []


this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-info">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-warning">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.tasks.length);
      return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('add-todo');
        var task = el.value;
    
        if (task) {
          this.tasks.push(task.trim());
          el.value = '';
          this.FetchAll();
        }
      };
    
      this.Edit = function (item) {
        var el = document.getElementById('edit-todo');
        el.value = this.tasks[item];
        document.getElementById('edit-box').style.display = 'block';
        self = this;
    
        document.getElementById('save-edit').onsubmit = function() {
          var task = el.value;
    
          if (task) {
            self.tasks.splice(item, 1, task.trim());
            self.FetchAll();
            CloseInput();
          }
        }
      };
    
      this.Delete = function (item) {
        this.tasks.splice(item, 1);
        this.FetchAll();
      };
    
      this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'Tasks';
    
        if (data) {
            if(data ==1){
                name = 'Task'
            }
          el.innerHTML = data + ' ' + name ;
        } 
        else {
          el.innerHTML = 'No ' + name;
        }
      };
      
    }
    
    app.FetchAll();
    
    function CloseInput() {
      document.getElementById('edit-box').style.display = 'none';
    }