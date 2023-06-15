import MathJax from "mathjax3-react";

function App() {
  return (
    <div>
      <MathJax.Provider
        url="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_CHTML-full"
        options={{ tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true },TeX: { extensions: ["mhchem.js"] } }}
      >
        <MathJax.Formula formula="$e^{i\pi} = -1$" />
        <MathJax.Html html="$\ce{CO2 + C -> 2 CO}$" />
      </MathJax.Provider>
    </div>
  );
}

export default App;
