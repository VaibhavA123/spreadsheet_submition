const Toolbar = () => (
  <div className="flex gap-4 text-sm border-b pb-2">
    {['Tool bar', 'Hide fields', 'Sort', 'Filter', 'Cell view'].map((item) => (
      <button
        key={item}
        className="px-3 py-1 bg-gray-50 text-gray-800 border rounded hover:bg-gray-100"
        onClick={() => console.log(`${item} clicked`)}
    style={{padding : "0.5rem", border : "none", width : "15rem",marginLeft:"0.5rem",marginTop:"0.5rem",backgroundColor:"rgb(62, 127, 255)", color : "white"}}>
        {item}
      </button>
    ))}
  </div>
);

export default Toolbar;