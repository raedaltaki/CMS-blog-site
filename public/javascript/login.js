async function loginBtnHandler(event) 
{
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username && password)
    {
        const res= await fetch("/api/users/login",
            {
                method: "post",
                body: JSON.stringify(
             {
                        username,
                        password
                    }
                ),
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }
        );

        if(res.ok)
        {
            document.location.replace('/dashboard');
        } 
        else 
        {
            window.alert("please check your username and password");
            alert(response.statusText);
        }
    }
}

async function signupBtnHandler(event) 
{
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username && password)
    {
        const res= await fetch("/api/users/",
            {
                method: "post",
                body: JSON.stringify(
             {
                        username,
                        password
                    }
                ),
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }
        );

        if(res.ok)
        {
            const res= await fetch("/api/users/login",
{
                    method: "post",
                    body: JSON.stringify(
                 {
                            username,
                            password
                        }
                    ),
                    headers:
                    {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if(res.ok)
            {
                document.location.replace('/dashboard');
            } 
            else 
            {
                alert(response.statusText);
            }
        } 
        else 
        {
            alert(response.statusText);
        }
    }
}


if(document.getElementById('login-form'))
{
    document.getElementById('login-form').addEventListener("submit",loginBtnHandler);
}
else
{
    document.getElementById('signup-form').addEventListener("submit",signupBtnHandler);
}