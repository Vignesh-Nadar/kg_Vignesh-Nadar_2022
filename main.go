package main

import "fmt"
import "os"
import "strconv"


func main() {
    arguments := os.Args[1:]
    size:= len(arguments)
    var err error
    input := make([]int, len(arguments))

    //converting the array of strings to array of integers
    for i := 0; i < size; i++ {
        if input[i], err = strconv.Atoi(arguments[i]); err != nil {
        panic(err)
        }
    }

    word :=[10]string{"Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"}

    //Looping through the input numbers
    for i := range input{
        num := input[i]
        var temp []string
        number := ""

        //Retrieving the individual numbers of the input and adding the corresponding phonetic to stack
        for num > 0{
            a := num%10
            temp = append(temp, word[a])
            num = num/10
        }

        //Creating the phonetic equivalent of the input number
        for len(temp) > 0{
            n := len(temp)-1
            l := temp[n]
            number = number+l
            temp = temp[:n]
        }

        //Display the phonetic equivalent; and ',' until the last input
        if i < size-1{
            fmt.Print(number+",")
        } else {
            fmt.Println(number)
        }

    }

}
