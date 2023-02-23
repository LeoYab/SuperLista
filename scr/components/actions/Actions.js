export const Actions = ({children})  => {



    const totalGral = () => {
        return products.reduce((acc, product) => {
          return acc + prodTotal(product);
    
        }, 0);
      };
    

return(

    <Actions >{children}</Actions>
)


}

