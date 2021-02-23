import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user = 0;
  x = 0;
  y = 0;
  map = [[]];

  constructor() {
    this.loadMap();
  }

  loadMap() {
    for (var i = 0; i < 5; i++) {
      this.map[i] = [];
      for (var j = 0; j < 5; j++) {
        this.map[i][j] = "*";
      }
    }
  }

  setCoordinate(_x, _y) {
    if (_x < 1 || _y < 1 || _x > 5 || _y > 5) {
      return alert("Range 1 - 5 only!");
    }
    if (this.map[_x - 1][_y - 1] == 0 || this.map[_x - 1][_y - 1] == 1) {
      return alert("Coordinate have value!");
    }
    this.map[_x - 1][_y - 1] = this.user.toString();
    if (this.user == 0) {
      this.user = 1;
    } else {
      this.user = 0;
    }
    this.x = 0;
    this.y = 0;
    return this.checkGame();
  }

  checkGame() {
    var check = 0;

    //horizontal check
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (this.map[i][j] != "*") {
          if (this.map[i][j] == this.map[i][j + 1]) {
            check++;
            if (check == 3) {
              if (this.map[i][j] == "0") {
                alert("User 0 Win!");
                return this.resetGame();
              } else {
                alert("User 1 Win!");
                return this.resetGame();
              }
            }
          } else {
            check = 0;
          }
        }
      }
    }

    //vertical check
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (this.map[j][i] != "*") {
          if (this.map[j][i] == this.map[j + 1][i]) {
            check++;
            if (check == 3) {
              if (this.map[i][j] == "0") {
                alert("User 0 Win!");
                return this.resetGame();
              } else {
                alert("User 1 Win!");
                return this.resetGame();
              }
            }
          } else {
            check = 0;
          }
        }
      }
    }
  }

  resetGame() {
    this.user = 0;
    this.x = 0;
    this.y = 0;
    this.loadMap();
  }
}
