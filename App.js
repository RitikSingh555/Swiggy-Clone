const heading1=React.createElement ( 
    "h1",
{
    id:"title",

},
      "Line 1"
 );
      
      
const heading2=React.createElement ( 
   "h2",
{
    id:"title",

},
      "Line 2"
);
    
const container=React.createElement ( 
    "div",
{
     id:"container",
    

}, 
     [heading1,heading2 ] 
);
     
const root=ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside root
root.render(container);