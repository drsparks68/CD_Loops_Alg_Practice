//Print odds 1-20:

for(var i = 1; i <=20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//This one was fairly simple.  I just reversed the logic from the modulo 'if(i % 2 == 0)' that gets all even numbers.




//Sum and print 1-5:

var sum = 0;
for(var i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("Number: " + i);
    console.log("Sum: " + sum);
}

//This took me a few because I wasn't sure what the mathematical operation should be here.  Once I figured it out, the output section was easy.
