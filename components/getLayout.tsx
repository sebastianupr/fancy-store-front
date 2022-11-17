import PageWrapper from "@components/PageWrapper";
import Layout from "@components/Layout";

export default function getLayout(page: React.ReactNode): JSX.Element {
  return (
    <PageWrapper>
      <Layout>{page}</Layout>
    </PageWrapper>
  );
}
