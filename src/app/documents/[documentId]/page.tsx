interface DocumentIdPageProps {
	params: Promise<{ documentId: string }>;
}

const Page = async ({ params }: DocumentIdPageProps) => {
	const { documentId } = await params;

	return <div>Document ID: {documentId}</div>;
};

export default Page;
