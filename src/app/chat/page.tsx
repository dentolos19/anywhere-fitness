import PageContainer from "@/components/page-container";

export default function Page() {
  return (
    <PageContainer requireLogin={true}>
      <div>Chat</div>
    </PageContainer>
  );
}