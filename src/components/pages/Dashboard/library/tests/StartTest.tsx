import { Link } from "react-router-dom";
import Button from "../../../../common/Button";

function StartTest() {
  const handleClick = () => {
    console.log("test button clicked");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="/images/dashboard/library/start-test.png"
        alt=""
        className="max-w-[30%] w-full mb-7"
      />
      <div className="text-xl  md:text-[30px] max-w-3xl text-center py-4">
        اختبر معلوماتك الدينية في هذه الاختبارات حيث ستعرف كم حصيلتك المعلوماتية
        بجانب إمكانية زيادتها من خلال الإطلاع على الإجابات الصحيحة{" "}
      </div>
      <Link to="/dashboard/library/tests/test1">
        <Button
          text="ابدا الاختبار"
          className="shadow-lg mt-10 w-full md:w-auto"
          onClick={handleClick}
        />
      </Link>
    </div>
  );
}

export default StartTest;
