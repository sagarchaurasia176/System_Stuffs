import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "ntn_S36024052384JX7H2SeJFw5HenFIn3rQKaMbEeN7iXB6Jr",
});

const dataSourceId = "2890d6b8-5776-8032-9210-000bc651d6b0";

async function debugProperties() {
  try {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "published",
        checkbox: {
          equals: true,
        },
      },
    });

    if (response.results.length > 0) {
      const firstPage = response.results[0];
      
      console.log("\n📋 FIRST PAGE PROPERTIES:");
      console.log(JSON.stringify(firstPage, null, 2));
      
      console.log("\n📋 ALL PROPERTY KEYS:");
      Object.keys(firstPage).forEach(key => {
        console.log(`- ${key}`);
      });
    }
  } catch (err: any) {
    console.error("❌ Error:", err.message);
  }
}

debugProperties();