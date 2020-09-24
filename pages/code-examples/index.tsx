import Head from "next/head";
import { CodeExamplesPage, BigTitle, PageText } from "../../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ben Grunfeld - Full Stack Engineer</title>
      </Head>
      <CodeExamplesPage>
        <BigTitle centered={false}>Live Code Examples</BigTitle>
        <br />
        <PageText>
          Honestly, I think it&apos;s really easy for developers to claim that
          they can do something like mobile-first UI, or using libraries like
          Formik and D3, but until you actually see a live version of their
          code, it&apos;s really hard to tell if it&apos;s the truth or not.
        </PageText>

        <PageText>
          Making things even more complex is that their opinion of what it means
          to &quot;know a library well&quot; might differ vastly from yours.
        </PageText>

        <PageText>
          Even having links to personal projects on Github that use said
          libraries or skills isn&apos;t sufficient proof, because unless you
          clone their library and run it locally, you can&apos;t even tell if it
          really works, or if it looks good.
        </PageText>

        <PageText>
          At the end of the day, code is just code. Seeing a live version that
          is functioning properly is just as important as reading the source
          code.
        </PageText>

        <PageText>
          For these reasons, I set up a Live Code Examples page which achieves a
          few different things. Firstly, it gives me a place to put up live
          examples of code I think is impressive or useful.
        </PageText>

        <PageText>
          It also proves my aptitude in implementing certain libraries and
          techniques, and it also serves as a central repository for myself. So
          if I want to remember how to implement a dropdown using Formik and
          React Select, I can look it up easily and see a working version.
        </PageText>

        <PageText>Please navigate through the menu to see my work.</PageText>
      </CodeExamplesPage>
    </>
  );
};

export default Home;
