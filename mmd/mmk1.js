/**
 1. В массиве из 20 целых чисел найти наибольший элемент и поменять его местами с первым элементом.
 */
 let array1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 20, 10, 11, 1, 3, 14, 15, 16, 16, 17, 23, 53,
  ];
  let max = Math.max(...array1);
  function start1(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == max) {
        arr[i] = arr[0];
        arr[0] = max;
      }
    }
    return arr;
  }
  console.log("1 - ", start1(array1));

  /**
 2. В массиве из 10 целых чисел найти наименьший элемент и поменять его местами с предпоследним элементом.
 */
 let fa = [0,2,3,4,5,6,7,8,9,10]
 let aa = fa [ 8 ]
     min = (Math.min(...fa))
         fa.splice(8, 1, min)           
         fa.splice( 0, 1, aa)       
         console.log(fa)

/**
 3. Дан массив F, содержащий 18 элементов. Вычислить и вывести элементы нового массива по формуле pi = 0.13f 3 – 2.5f + 8. Вывести отрицательные элементы массива P
 */
let e = [1,2,3,4,5,6,7,8,9,-10,11,12,13,14,15,16,17,18]
let s = [ ]
e.forEach(z =>{
   z = 0.13*Math.pow(z, 3) - 2.5 * z + 8 
 if(z < 0 ){
  s.push(z)
}   
}
)
console.log(s);
//4. В массиве R, содержащем 25 элементов, заменить значения отрицательных элементов квадратами значений, значения положительных увеличить на 7, а нулевые значения оставить без изменения. Вывести массив R
let q = [0,1,2,3,4,5,6,-7,8,9,10,11,12,13,14,-15,16,17,-18,-19,20,21,22,23,24,25]
let w =[]
q.forEach(z=>{ 
    if(z <= 0){
        z= Math.pow(z, 2)

    }else{
        z = z + 7
    
}
    w.push(z)
}
)
     
console.log(w)

//5. Дан массив A целых чисел, содержащий 30 элементов. Вычислить и вывести сумму тех элементов, которые кратны 5.
let A = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];
  function start5(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 5 == 0) {
        summ += arr[i];
      }
    }
    return summ;
  }
  console.log(start5(A));

  /**
 6. Дан массив A целых чисел, содержащий 30 элементов. Вычислить и вывести сумму тех элементов, которые нечетны и отрицательны.
 */
let a = [
    1, 2, -3, 4, 5, 6, -7, 8, 9, -10, 11, -12, -13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, -26, 27, 28, 29, -30,
  ];
  function start6(arr) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0 && arr[i] < 0) {
        summ += arr[i];
      }
    }
    return summ;
  }
  console.log(start6(a));
//7. Дан массив A целых чисел, содержащий 30 элементов. Вычислить и вывести количество и сумму тех элементов, которые делятся на 5 и не делятся на 7.
const n = [0, 1, 2, 3, 4, 5, -6, 7, 8, 9, 10, -11, 12, 13, -14, 15, -16, 17, 18, 19, 20, 21, 22, 23, -24, 25, 26, 27, 28, 29, 30]
let c = []
n.forEach(z => {
    if(z % 5 == 0 && z % 7 != 0){
        c.push(z)
}
}
)
 let f = c.reduce(function(g,f){
    return g + f
}
)
console.log(c)
console.log(c.length)
console.log(f);

/**
 8. Дан массив A вещественных чисел, содержащий 25 элементов. Вычислить и вывести число отрицательных элементов и число членов, принадлежащих отрезку [1,2].
 */
 let A3 = [
    2, 7, 9, 7, 9, 3, 4, -2, -1, -3, -4, 1.9, 1.4, 1.3, 1.2, 2.2, 3, 4, 4, 6, 5,
    7, 2, 4, 8,
  ];
  function start8(arr) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        x++;
      }
      if (arr[i] <= 2 && arr[i] >= 1) {
        y++;
      }
    }
    return [x, y];
  }
  console.log(start8(A3));

  /**
 9. Дан массив Z целых чисел, содержащий 35 элементов. Вычислить и вывести R = S + P, где S – сумма четных элементов, меньших 3, P – произведение нечетных элементов, больших 1.
 */
 let Z = [
    1, 2, -3, 4, 5, 6, -7, 8, 9, -10, 11, -12, -13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, -26, 27, 28, 29, -30, 31, 32, -33, 34, 35,
  ];
  function start9(arr) {
    let S = 0;
    let P = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 && arr[i] < 3) {
        S += arr[i];
      }
      if (arr[i] % 2 != 0 && arr[i] > 1) {
        P *= arr[i];
      }
    }
    let R = S + P;
    return R;
  }
  console.log(start9(Z));

  /**
 10. Дан массив Q натуральных чисел, содержащий 20 элементов. Найти и вывести те элементы, которые при делении на 7 дают остаток 1,2 или 5.
 */
let Q = [
    34, 20, 14, 34, 64, 63, 31, 78, 37, 74, 12, 99, 87, 45, 36, 65, 68, 44, 48,
    21,
  ];
  function start10(arr) {
    let Q1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 7 == 1 || arr[i] % 7 == 2 || arr[i] % 7 == 5) {
        Q1.push(arr[i]);
      }
    }
    return Q1;
  }
  console.log("10 - ", start10(Q));

/**
 11. Дан массив, содержащий 10 элементов. Вычислить произведение элементов, стоящих после первого отрицательного элемента. Вывести исходный массив и результат вычислений.
 */
 let array3 = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
 function start11(arr) {
   let result = 1;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
       for (let j = i + 1; j < arr.length; j++) {
         result *= arr[j];
       }
     }
   }
   return result;
 }
 console.log(start11(array3))
 console.log(array3); 

/**
 12. Дан массив, содержащий 14 элементов. Вычислить сумму элементов, стоящих до первого отрицательного элемента. Вывести исходный массив и результат вычислений.
 */
 let array4 = [1, 2, -3, 4, 5, 6, 7, 8, 9, -10, -11, 12, 13, -14];
 function start12(arr) {
   let result = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
       break;
     } else {
       result += arr[i];
     }
   }
   return result;
 }
 console.log(array4, start12(array4));

/**
 13. Дан массив, содержащий 12 элементов. Все четные элементы сложить, вывести массив и результат.
 */
 const x = [1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12]
 let h = 0
 x.forEach(a=>{
     if( a % 2 == 0){
        h += a 
          
 }
 }
 )
 console.log(h)
 console.log(x);
  /**
 14. Дан массив, содержащий 15 элементов. Все положительные элементы возвести в квадрат, а отрицательные умножить на 2. Вывести исходный и полученный массив.
 */
 const mm = [1, 2, 3, 4,-5, 6, 7, -8, 9, 10, 11, 12, 13, 14,15]
 const rr = mm.map(a=>{
 
     if(a > 0){
     return  Math.pow(a, 2)
         
     }else{
     return a * 2 
        
 }
 }
 )
 
 console.log(mm)
 console.log(rr);

 /**
 15. Дан массив, содержащий 14 элементов. Все отрицательные элементы заменить на 3. Вывести исходный и полученный массив.
 */
 const arrR = [1, 2, 3, 4,-5, 6, 7, 8, 9, -10, 11, 12, 13, 14]
 const ar = []
 arrR.forEach(a=>{
     if(a<0){
     a = 3
     
     
   }
   ar.push(a)
   }
   )
   console.log(arrR)
   console.log(ar);

   /**
 16. Написать метод min(x, y), находящий минимальное значение из двух чисел. С его помощью найти минимальное значение из четырех чисел a, b, c, d.
 */
 function start16(x, y) {
    return Math.min(x, y);
  }
  console.log("16 - ", start16(start16(4, 2), start16(7, 6)));

  /**
 17. Написать метод max(x, y), находящий максимальное значение из двух чисел. С его помощью найти максимальное значение из четырех чисел a, b, c, d.
 */
 function start17(x, y) {
    return Math.max(x, y);
  }
  console.log("17 - ", start17(start17(4, 2), start17(1, 6)));

/**
 18. Написать метод, вычисляющий значение n/xn. С его помощью вычислить выражение:
 */
  function start18(x) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
      result += i / Math.pow(x, i);
    }
    return result;
  }
  console.log("18 - ", start18(10));

  /**
 19. Написать метод, вычисляющий значение n/xn. С его помощью вычислить выражение:
 */
 let xx = 5
 for(i = 1;i<=10;i=i+1){
     let s = i/Math.pow(xx, i)

console.log(s)
}
/**
 20. Написать метод, вычисляющий значение xn/(n+x). С его помощью вычислить выражение:
 */
 function start20(x) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
      result += Math.pow(x, i) / (x + i);
    }
    return result;
  }
  console.log("20 - ", start20(10));

  /**
 21. Написать метод, вычисляющий значение sin(x) + cos(2 * x). С его помощью определить, в какой из точек a, b или с значение будет минимальным.
 */
 let a1 = 3,
 b1 = 7,
 c1 = 4;
function start21(x) {
 return Math.sin(x) + Math.cos(2 * x);
}
if (start21(a1) < start21(b1) && start21(a1) < start21(c1)) {
 console.log("21 - ", a1);
} else if (start21(b1) < start21(a1) && start21(b1) < start21(c1)) {
 console.log("21 - ", b1);
} else {
 console.log("21 - ", c1);
}
/**
 22. Написать метод, вычисляющий значение x2 + y2. С его помощью определить, с какой парой чисел (a, b) или (с, d) значение будет максимальным.
 */
let a2 = 5,
b2 = 3,
c2 = 2;
d2 = 8;
function start22(x, y) {
return Math.pow(x, 2) + Math.pow(y, 2);
}
if (start22(a2, b2) > start22(c2, d2)) {
console.log("22 - a,b");
} else {
console.log("22 - c,d");
}

/**
 23. Написать метод, вычисляющий значение x2 * y3 * √z. С его помощью определить, с какой тройкой чисел (a, b, c) или (d, e, f) значение будет максимальным.
 */
 let a3 = 2;
 b3 = 3;
 c3 = 7;
 d3 = 5;
 e3 = 9;
 f3 = 2;
 function start23(x, y, z) {
   return Math.pow(x, 2) + Math.pow(y, 2) + Math.sqrt(z);
 }
 if (start23(a3, b3, c3) > start23(d3, e3, f3)) {
   console.log("23 - a,b,c");
 } else {
   console.log("23 - d,e,f");
 }
/**
 24. Написать метод, который у четных чисел меняет знак, а нечетные числа оставляет без изменения. С его помощью обработать ряд чисел от 1 до 10.
 */
 let arrM = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1, 2, 3, 4,5, 6, 7, 8, 9, 10]
 let bb = arrM.map(a=>{
     if(a % 2 == 0 ){  
         return a*-1
 
     }else{
         return a
     }
 })
 console.log(bb)
 /**
 25. Написать   метод,   который   положительные   числа   возводит в квадрат, а отрицательные – в куб. С его помощью обработать ряд чисел от –10 до 10.
 */
 let array9 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function start25(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i] = Math.pow(arr[i], 2);
      } else {
        arr[i] = Math.pow(arr[i], 3);
      }
    }
    return arr;
  }
  console.log("25 - ", start25(array9));
  /**
 26. Написать метод, который вычисляет значения   x = sin2(a) и y = cos2(a). Напечатать таблицу значений от –π до π с шагом π/4.
 */
 let result = [];
 function start26(x, y) {
   x = Math.pow(Math.sin(x), 2);
   y = Math.pow(Math.cos(y), 2);
   return [x, y];
 }
 for (let i = -Math.PI; i <= Math.PI; i = i + Math.PI / 4) {
   result.push(start26(i, i));
 }
 console.log("26 - ", result);
 
/**
 27. Написать метод, который вычисляет значения x = a2 и y = √a. Напечатать таблицу значений от –10 до 10 с шагом 1.
 */
 for(a=-10 ;a <10 ;a = a + 1){
    x = Math.pow(a, 2)
    y = Math.sqrt(a)
    console.log(x,y)
}
/**
 28. Написать метод, который в переданной строке заменяет все точки на многоточие. С его помощью обработать пять разных строк и отобразить их на экране.
 */
 function start28(x) {
    x = x.replace(/\./g, "...");
    return x;
  }
  console.log(
    "28 - ",
    start28("Hello world."),
    start28("Hello cuties. How are you?"),
    start28("Bye."),
    start28("Хочу домой."),
    start28("I'm a queen.")
  );
  /**
 29. Написать метод, который в переданной строке заменяет все строчные буквы на заглавные, и наоборот. С его помощью обработать пять разных строк и отобразить их на экране.
 */
 let ee =`gfdgfsdgdfgfsdgdfg`
 console.log(ee.toUpperCase())
 console.log(ee.toLowerCase());
 /**
 30. Написать метод, который разделяет переданную строку на две отдельных строки: первая содержит исходную строку до первой точки, а вторая – исходную строку после первой точки. С его помощью обработать пять разных строк и отобразить результаты на экране.
 */
 let ss =`Но представители современных социальных резервов, вне зависимости от их уровня, должны быть заблокированы в рамках своих собственных рациональных ограничений.Картельные сговоры не допускают ситуации, при которой тщательные исследования конкурентов объявлены нарушающими общечеловеческие нормы этики и морали.`
 ss = ss.replace(/\./g,`\n`)
 console.log(ss)
 /**
 31. Написать метод, который подсчитывает количество знаков препинания в переданной строке. С его помощью обработать пять разных строк и отобразить результаты на экране.
 */
 function start31(x) {
    let count = 0;
    const marks = [".", ",", "!", "?"];
    for (let ch of x) {
      if (marks.includes(ch)) {
        count++;
      }
    }
  
    return count;
  }
  console.log(
    "31 - ",
    start31("Hello. student."),
    start31("Hello teacher. Are we going to have. lectures today ?"),
    start31("No."),
    start31("Why? There should. be lectures."),
    start31("I'm. fucked up.")
  );

  let st =`Приятно, граждане, наблюдать, как сделанные на базе интернет-аналитики выводы будут объявлены нарушающими общечеловеческие нормы этики и морали. Как принято считать, сделанные на базе интернет-аналитики выводы объединены в целые кластеры себе подобных.`

function as(str){
    const st = str.match(/[,i.]/gi)
    return st ? st.length : 0
}
console.log(as(st))
/**
 32. Написать метод, который находит сумму чисел в переданной строке. Числом считается непрерывная последовательность цифр, отделенная от остального текста пробелами или расположенная в начале либо конце строки. Допустимо использовать метод Split класса String. С помощью этого метода обработать пять разных строк и отобразить результаты на экране.
 */
 function start32(x) {
    let sum = 0;
    let numbers = x.match(/\d+/g).map(Number);
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(
    "32 - ",
    start32("Hello 10 student."),
    start32("Hello 1 teacher. Are we 12 going to have lectures today ?"),
    start32("No. 1"),
    start32("Why? 32 There should 44 be lectures."),
    start32("I'm 22 fucked 99 up.")
  );
  /**
 33. Написать метод, определяющий, является ли переданная строка палиндромом, то есть текстом, который слева направо и справа налево читается одинаково без учета пробелов и регистра символов. С помощью этого метода обработать пять разных строк и отобразить результаты на экране.
 */
 function polidrom(str){
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}
console.log(polidrom(`nttn`))

/**
 34. Написать метод, находящий сумму матриц одинакового размера и возвращающий новую матрицу. С помощью этого метода обработать пары матриц и отобразить результаты на экране.
 */
 let arrg = [[1,2],[5,6]]
 let arrS = [[2,6,],[6,4]]
 const arr = [[],[]]
 arrg.forEach((a,i)=>{
 a.forEach((row,j)=>{
     arr[i][j]=arrg[i][j]+arrS[i][j]
 
 }
 )
 }
 )
 
 console.log(arr)
 /**
 35. Написать метод, находящий сумму элементов, находящихся не на главной диагонали переданной матрицы. 
 С помощью этого метода обработать пары матриц и отобразить результаты на экране.
 */
 let arra = [[1,3],[5,6]]
 let ca  = 0
 arra.forEach((z,i)=>{
     z.forEach((x,g)=>{
         if(1-[g]==i){
             ca+=x
             
         } 
         }
            
 
 )
 })
 
 console.log(ca);

 let array12 = [
    [23, 22, 21],
    [32, 35, 33],
    [61, 64, 66],
  ];
  function start35(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
        if (x[i][j] != x[i][i]) {
          sum += x[i][j];
        }
      }
    }
    return sum;
  }
  console.log("35 - ", start35(array12));