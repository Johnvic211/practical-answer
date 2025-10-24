# PART 1

## 1 Troubleshooting and Problem Analysis (10 points)

### 1.1 Describe your troubleshooting process.

- First I will check the front-end part, to see the behavior once I click the submit, because it could be caused by the validation of the frontend or the button doesn’t really do anything. There are times that JS is not properly loaded so I have to check that first. If the error is not caused by any of it, then I will try to submit to see in the Network tab if the API is returning anything (response). If none, then it means that either the URL is incorrect or it is inaccessible. Sometimes the error is caused by the browser, so I will try accessing it to different browsers like Chrome, Edge, Safari, and etc. Next, I will check the logs if there are any uncaught errors.
- After the front-end part, if I still didn’t identify the error, I will try recreating the request through Postman using the same payload and headers collected from the Network tab.
- From the response of the Postman I should be able to somehow see the error because the result from Postman and Browser can be different.
- Next I will check the Backend or the server. In Laravel I can check the larave.log, or even the hosting provider.
- Next I will check the code to verify if the backend receives the request, sometimes the validation failures, thrown errors, or database errors are not being thrown correctly. Sometimes the empty responses can be mishandled by the front-end.
- So backend your goal is to make sure that it reaches the last end of your code or program, because if not then the error is in the backend.
- Sometimes I use dd() in laravel to check the data and request flow.
- After all the steps I should be able to identify the error and come up with a solution. The important thing here is to get the error code or message so you could also research it because most of the time it has already been encountered by many developers.

### 1.2 Provide as many possible causes as you can based on your experience with similar error.

- Frontend: validation error, button disabled, submit handler never runs, JS error before the API call or request, browser extensions such as ad blockers, unhandled promise rejection, JS is not loaded or the other libraries are not all loaded, if using CDN sometimes it doesn't load or the CDN does not exist anymore.
- Backend: CORS blocking, FIrewall config, large payload causing connection drop, timeouts, expired token, CSRF mismatch, server-side validation failure, 500 internal error or exception like null refs and DB constraint, job failing, hosting provider error, and the most common is code error like in PHP no semi-colon or variable not existing (could be prevented using VS code extensions).

## 2 Validation (10 points)

### Provide front-end validations (Using zod)

username: z.string().readonly(),
firstname: z.string().min(1, ‘First name is required’),
lastname: z.string().min(1, ‘Last name is required’),
birthdate: z.string(),
.min(1, ‘Birthdate is required’),
.refine((val) => !isNaN(Date.parse(val)), ‘Invalid date’),
.refine((val) => new Date(val) < new Date(), ‘BIrthdate must be in the past’),
country: z.string().min(1, ‘Country is required’),
email: z.string().min(1, ‘Email is required’).email.(‘Invalid email format’),
mobile: z.string().min(1, ‘Mobile number is required’).regex(/^09\d{9}$/, ‘Invalid PH number’) //regex can be used if necessary, especially if its just from PH.

### Provide back-end validations (Laravel)

‘username’ => ‘required|string’,
‘first_name’ => ‘required|string|max:255’, //the 255 depends on the DB length
‘last_name’ => ‘required|string|max:255’,
‘birthdate’ => ‘required|date’,
‘country’ => ‘required|string|in:country,id’, //id or name
‘email_address’ => ‘required|email|string|unique:users,email’,
‘mobile_number’ => ‘required|regex:/^09\d{9}$/’

## How will you present the error message to the user

- In frontend I will show it under the field in red text
- Showing in a red banner the placement can be different but for me I usually put it on top of form.
