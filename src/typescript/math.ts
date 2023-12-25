
interface MathObject {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
  }



const obj:MathObject={
    add:function(a:number,b:number):number{
        return a+b
    },

    subtract:function(a:number,b:number):number{
        return a-b
    }
}



export default obj