// className="container mx-auto px-4"
// className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
function Container({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">{children}</div>
  );
}

export default Container;
