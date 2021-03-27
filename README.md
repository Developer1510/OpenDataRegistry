Sentinel Hub Public Collections Registry lists all collections, which can be used within Sentinel Hub - both the ones managed by Sentinel Hub operator as well as those contributed by third parties.  

## Logos
You can add logos to the `src/img/logos` directory for use in the **detail**  pages. Logos should be square PNGs and are currently sized down to 100px x 100px for display. The name of the logo file that the template looks for is tied to the entry in the `ManagedBy` data field. Spaces are replaced with '-' and special characters are removed. If the `ManagedBy` field is using markdown, the link text field is used, otherwise, the entire string is used to generate the logo path for testing.

## Endpoints
- `/` - Main datasets listing page, provides search mechanism.
- `ex: /1000-genomes` - Individual detail pages for each dataset, contains details, license, contact, documentation and example usage links and AWS resources available.
- `/usage-examples/` - Lists all usage examples grouped by dataset.
- `/index.yaml` - YAML formatted listing of each individual YAML file for provided datasets. [`datasets.yaml` is created but should be considered deprecated]
- `/index.ndjson` - NDJSON formatted listing of each individual YAML file for provided datasets.
- `ex: /tag/earth-observation/` - Tag-subsetted view of the main datasets listing page.
- `ex: /tag/machine-learning/usage-examples/` - Tag-subsetted list usage examples grouped by dataset.
- `ex: /tag/astronomy/datasets.yaml` - YAML for all datasets associated with a tag.
- `ex: /datasets/awslabs-open-data-registry/datasets/1000-genomes.yaml` - YAML for individual dataset, used to create the HTML pages.
- `/sitemap.txt` - Sitemap listing all the HTML pages.
- `/providers.html` - A simple listing of logos of data providers.

## Building
1. Get this repository and the related data files with `git clone git@github.com:awslabs/open-data-registry-browser.git`.
1. `npm run copy-data` to copy data repositories locally, see note about using multiple repositories below.
1. `npm install` to install required Node.js modules.
1. `npm run serve` to develop the site with live reloading OR `npm run build` to build the site for deployment. See note about using multiple repositories below.

## Redirects
By using the redirects map in `src/config.yaml` you can set up simple HTML redirects from `source` to `target`. This does not copy any content, simply creates a new HTML page. This function runs after other HTML content is generated so it can be used to create new or overwrite existing HTML pages.
