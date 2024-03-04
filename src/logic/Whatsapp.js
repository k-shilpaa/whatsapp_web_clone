export const getTime=()=>{
    return new Date().toLocaleString("en-IN",{
        hour:"numeric",
        minute:"numeric",
        hour12:true
    })
    .toLocaleLowerCase();
}