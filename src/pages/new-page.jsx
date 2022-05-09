// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";
import TitleAndText from "components/TitleAndText";
import Button from "components/ui/Button";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo
        title="Seo title"
        description="Meta description...."
        keywords="Awesome, Keywords, Goes, Here"
      />

      <Hero
        title="Bezpečnost a ochrana zdraví při práci"
      />

      <TitleAndText
        title="   LOREM IPSUM DOLOR SIT AMET, CO"
        text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
        text2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
      />
      <TitleAndText
        title="2. LOREM IPSUM DOLOR SIT AMET, CO"
        text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
        text2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
      />
      <TitleAndText
        title="3. LOREM IPSUM DOLOR SIT AMET, CO"
        text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
        text2="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat. Suspendisse 
              nisl. Integer pellentesque quam vel velit. Etiam neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus soetus. Pellentesque 
              habitant morbi tristique senectus et netus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. 
              Aliquam ante. Aliquam erat ectetuer adipiscing elit. ectetuer adipiscing elit. "
      />
      <Button 
            as="button"
            className="left-1/2 -translate-x-1/2 bottom-9"
            shape="pill"
            color="primary"
            size="sm"
          >
            OBJEDNAT SLUŽBU
          </Button>
    </AppLayout>
  );
}
