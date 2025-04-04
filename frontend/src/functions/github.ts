export async function getReadme(repoUrl: string) {
	const repo = repoUrl.split("github.com/")[1];
	const readmeUrl = `https://raw.githubusercontent.com/${repo}/main/README.md`;
	const response = await fetch(readmeUrl);
	return response.text();
}
