export const LifeCycleComponent1 = () => {
  function A() {
    console.log("A");
    return <B />;
  }
  function B() {
    console.log("B");
    return <C />;
  }

  function C() {
    console.log("C");
    return null;
  }

  function D() {
    console.log("D");
  }

  return (
    <>
      <A />
      <D />
    </>
  );
};
