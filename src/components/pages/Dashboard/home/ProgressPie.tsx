function ProgressPie() {
  return (
    <div
      className="w-32 h-32  flex justify-center items-center bg-red-300 -translate-x-2 translate-y-2"
      style={{
        background: `
          radial-gradient(
            circle closest-side,
            white 0,
            white 60%,
            transparent 42%,
            transparent 78%,
            white 0
          ),
          conic-gradient(
            #009048 0,
            #009048 71.4%,
            #FFED89 0,
           #FFED89 100%
          )
        `,
      }}
    >
      <div className="flex items-center justify-center rounded-full w-[40%] h-[40%] bg-[#F2F2F2]">
        80%
      </div>
    </div>
  );
}

export default ProgressPie;
