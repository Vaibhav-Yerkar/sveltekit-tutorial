export async function load({params}){
  
  return {
    content : `Hello ${params.slug}`
  }
}