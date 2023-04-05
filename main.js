
var Canvas = (function () {
  var obj = function () {
    this.ctx = null;
  };
  obj.prototype = {
    init : function () {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id", "render");
      canvas.width = "256px";
      canvas.height = "256px";
      document.querySelector("body").appendChild(canvas);
      this.ctx = document.getElementById("render").getContext("2d");
    },
    setSize : function (width, height) {
      var canvas = this.ctx !== null ? this.ctx : alert("Cannot set dimensions of uninitialized canvas");
      canvas.width = width.toString() + "px";
      canvas.height = height.toString() + "px";
    }
  };
  
  return obj;
})();

