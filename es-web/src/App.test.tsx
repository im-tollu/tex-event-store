import {describe, expect, test} from "vitest";
import App from "./App";
import {render, screen} from "@testing-library/react";

describe("App test", () => {
    test("App should be rendered", () => {
        render(<App></App>);

        expect(screen.getByText('Vite + React')).toBeDefined();
    })
})