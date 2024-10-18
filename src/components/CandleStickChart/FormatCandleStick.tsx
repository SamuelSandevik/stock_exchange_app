
export interface CandlestickData {
    x: Date;
    y: number[];
  }
  
  const FormatStock = (data: any[]): CandlestickData[] => {
    return data.map((item) =>{
      return {
        x: new Date(item.t), 
        y: [item.o, item.h, item.l, item.c],
      };
  
    })
  
  };
  
  export default FormatStock;
  