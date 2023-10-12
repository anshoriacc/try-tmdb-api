import { Button, Result } from "antd";

const NotFoundPage = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Maaf, halaman yang dicari tidak ditemukan"
        extra={
          <Button
            href="/"
            type="primary"
            className="bg-gradient-to-bl from-[#003c5e] to-[#007cab] border-0"
          >
            Back Home
          </Button>
        }
      />
    </section>
  );
};

export default NotFoundPage;
