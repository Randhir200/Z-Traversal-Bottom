// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// output - 1 2 3 5 7 8 9

function runProgram(input) {
    input=input.trim();
    input=input.split("\n");
    var tc = +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line]
        var arr=[];
        line++;
        for(var r=0;r<n;r++){
            arr.push(input[line].trim().split(" ").map(Number))
            line++;
        }
        var bag="";
        // console.log(arr);
        for(var j=0;j<n-1;j++){
            bag+=arr[0][j]+" ";
        }
        for(var j=0;j<n;j++){
            for(var k=0;k<n;k++){
                if(j+k==n-1){
                    bag+=arr[j][k] + " ";
                }
            }
        }
        for(var j=1;j<n;j++){
            bag+=arr[n-1][j]+" ";
        }
        console.log(bag);
    }

}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

