
---

## 3. Core Behavior

### General Philosophy

The ruleset enforces:

- Deterministic ordering (document root, operations, components, alphabetical maps)
- Strict naming (operationId prefixes, request/response naming conventions)
- Explicit types, formats, and nullability everywhere
- Strict `$ref` usage: no inline parameters, requestBodies, or responses
- No inline examples or inline enums
- Mandatory correlation IDs
- Required descriptions for most elements
- Predictable structure across all OpenAPI specs

---

## 4. Built-in Spectral Rule Overrides

### Info & Metadata

- info-contact: enabled  
- info-description: disabled  
- info-license: disabled  
- info-version: enabled  
- info-version-semver: enabled  
- license-url: disabled  

### Examples & Servers

Enabled:

- no-invalid-media-type-examples  
- oas-example-valid-media  
- oas3-valid-content-example  
- oas3-valid-media-example  

Server-related rules are disabled.  
Example-related rules that conflict with the stricter IGNITIA rules are disabled.

### Operations

Enabled:

- operation-description  
- operation-operationId  
- operation-operationId-unique  
- operation-operationId-valid-in-url  
- operation-parameters  
- operation-security  
- operation-singular-tag  
- operation-success-response  
- operation-tag-defined  
- operation-tags  
- operation-tags-resolved  

Disabled:

- operation-summary (IGNITIA rules enforce this explicitly)

### Paths

Enabled:

- path-declarations-must-exist  
- path-params  
- responses-2xx-schema  

Disabled:

- path-keys-no-trailing-slash  
- path-not-include-query  

### Schemas

Enabled:

- oas3-schema  
- oas3-schema-circular  
- oas3-schema-required-properties  
- schema-invalid-json  
- schema-typed-array  

Disabled:

- oas3-schema-description  
- oas3-schema-examples  
- schema-typed-enum  

These are replaced with stricter IGNITIA schema requirements.

---

## 5. Custom IGNITIA Rules

### 5.1 Document Structure

- IGNITIA001: Enforce top-level key order (`openapi`, `info`, `servers?`, `security?`, `tags`, `paths`, `components`)

### 5.2 Info Section

- IGNITIA002A: `info.title` required  
- IGNITIA002B: `info.title` must be kebab-case  
- IGNITIA002C: `info.description` required  
- IGNITIA002D: `info.version` required  

### 5.3 Tags

- IGNITIA003A: `tags[].name` required  
- IGNITIA003B: `tags[].description` required  

### 5.4 Paths & Operations

- IGNITIA004A–004E: Operations must define description, tags, summary, operationId, responses  
- IGNITIA004F: Enforce canonical property ordering inside operations  
- IGNITIA004G–004I: parameters, requestBody, responses must be `$ref` (no inline definitions)  
- IGNITIA004J: `operationId` must start with HTTP verb prefix (Get, Post, Put, Patch, Delete)  
- IGNITIA004M: RequestBody must be named `{operationId}Request`  
- IGNITIA004N: Parameters must include `x-correlation-id` header  
- IGNITIA004O: 200/201 responses must follow naming `{operationId}Response` (201 may be `CreatedResponse`, 204 `NoContentResponse`)  
- IGNITIA004Q: Error responses must reference canonical response components  

### 5.5 Components Ordering

- IGNITIA005A: Component group order must be: securitySchemes?, parameters, requestBodies?, responses, headers, schemas  
- IGNITIA006A / 007A / 008A / 009A / 010A: All component maps must be alphabetized  

### 5.6 Parameters

- IGNITIA006B: Parameter descriptions required  
- IGNITIA006D: Path parameters require `required: true`  
- IGNITIA006E: `style: form` must include `explode: false`  

### 5.7 Request Bodies

- IGNITIA007B: Description required  
- IGNITIA007D: Must define `required`  

### 5.8 Responses

- IGNITIA008B: Description required  
- IGNITIA008D: Responses must define `headers` and `headers.x-correlation-id`  

### 5.9 Schemas

- IGNITIA009B / 009C: Schema must define `description` and `type`  
- IGNITIA009D: Object schemas must define `additionalProperties`  
- IGNITIA009E: Arrays must define `uniqueItems`  
- IGNITIA009F: number properties must specify format (float, double, decimal)  
- IGNITIA009G: integer properties must specify format (int32, int64)  
- IGNITIA009H: Complex types may only `$ref` other complex types, not inline primitives  
- IGNITIA009I: No inline enums inside complex types  
- IGNITIA009J: Root-level primitive schemas forbidden  
- IGNITIA009K: Inline `example` fields forbidden  
- IGNITIA009L: If `additionalProperties: false`, `properties` must exist  
- IGNITIA009M: Arrays must define `items`  
- IGNITIA009N: All schema properties must define `nullable`  
- IGNITIA009O: Root object/array schemas must define `nullable`  
- IGNITIA009P: Enum schemas must define `nullable`  

### 5.10 Examples

- IGNITIA010A: Examples must be alphabetized  
- IGNITIA010B: Examples must define `description`  
- IGNITIA010C: Examples must define `value`  

---

## 6. Custom Functions Used

- oasDocumentOrder: validates top-level key ordering  
- pathPropertiesOrder: validates operation field ordering  
- requestBodyNamingPattern: enforces `{operationId}Request` naming  
- hasXCorrelationId: ensures correlation ID header exists  
- responseNamingPattern: validates response naming conventions  
- componentOrder: validates components section ordering  
- sortedAlphabetically: validates alphabetical ordering  

---

## 7. Contribution / Extension

- Modify or disable rules via `rules:`  
- Extend the ruleset by adding additional IGNITIA rules  
- Add new functions via `functions:`  
- Test your changes using Spectral CLI