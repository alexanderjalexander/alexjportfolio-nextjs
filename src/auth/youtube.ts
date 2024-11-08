const ytHeaders = new Headers();
ytHeaders.append("key", process.env.YOUTUE_API_KEY!);
export default ytHeaders;