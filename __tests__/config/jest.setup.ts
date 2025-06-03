import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

// TODO: this is outdated lifeHuck - needed to het env variables from .env file for the Providers of test-utils.
// there is modern approach how to handle that
import next from "next";
next({ dev: true });
