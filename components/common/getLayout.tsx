import PageWrapper from "@components/common/PageWrapper";
import Layout from "@components/common/Layout";

export default function getLayout(page: React.ReactNode): JSX.Element {
  return (
    <PageWrapper>
      <Layout>{page}</Layout>
    </PageWrapper>
  );
}
