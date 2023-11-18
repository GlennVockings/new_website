// import fetch from "node-fetch";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const filePath = path.resolve(__dirname, "../client/src/fragmentTypes.json");

// fetch("https://oxted-api.onrender.com/graphql", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     variables: {},
//     query: `
//       {
//         __schema {
//           types {
//             kind
//             name
//             possibleTypes {
//               name
//             }
//           }
//         }
//       }
//     `,
//   }),
// })
//   .then((result) => result.json())
//   .then((result) => {
//     // here we're filtering out any type information unrelated to unions or interfaces
//     const filteredData = result.data.__schema.types.filter(
//       (type) => type.possibleTypes !== null
//     );
//     result.data.__schema.types = filteredData;
//     fs.writeFileSync(filePath, JSON.stringify(result.data), (err) => {
//       if (err) {
//         console.error("Error writing fragmentTypes file", err);
//       } else {
//         console.log("Fragment types successfully extracted!");
//       }
//     });
//   });

import fetch from "cross-fetch";
import fs from "fs";

fetch("https://oxted-api.onrender.com/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {};

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map(
          (subtype) => subtype.name
        );
      }
    });

    fs.writeFileSync(
      "../client/src/possibleTypes.json",
      JSON.stringify(possibleTypes),
      (err) => {
        if (err) {
          console.error("Error writing possibleTypes.json", err);
        } else {
          console.log("Fragment types successfully extracted!");
        }
      }
    );
  });
