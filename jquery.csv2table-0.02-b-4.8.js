





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-PkbtxdWDpLChpxtWQ0KbvJoef4XMYPq5pfd/ZmylYZTzXYpCfGwN9d+bsSKcmOJLwTkfjFkfj5wz3poDrhJoSQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-f6e6ce21346c0d2eb22def1e8534afcb.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-5Pj8fq31sBxIXK/KwAiU+J0oAeEWcf3ndslrDTUHFp1D9pyFfxQrIOS0mWomoAkUy1xbFPXOt/X6Aoj3kITLow==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-77e7f4e063161936c478054317d2f5be.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>csv2table/jquery.csv2table-0.02-b-4.8.js at master · toshirot/csv2table</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/154680?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="toshirot/csv2table" /><meta property="og:url" content="https://github.com/toshirot/csv2table" /><meta property="og:description" content="csv2table - This is the  jQuery plug-in that  reads the CSV file, and generates display an HTML table." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjgzNDAwNTMyOmNhZWJhNzVkMzdmYTVkNzQ0YWI2ZTc3NWQwYjFjYTAyYjkxMzAxNzJmY2RmNTc3NTM4OTRlOTQzODkzNTdmYzE=--852160a21bfba7bf6f0e6970e4ae08c38ad93b01">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="720C:035F:17C2EC4:1D2E1FF:5B17303A" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="720C:035F:17C2EC4:1D2E1FF:5B17303A" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="39933788" /><meta name="octolytics-actor-login" content="hitnori" /><meta name="octolytics-actor-hash" content="a6fea736edc218917f6fe22fb00ae4d48a0e0b13bdc7b7e0b88de14b8bb29ca7" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="hitnori">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NmEzY2QyNmI4YmJiYWE2NjRmMGY3ZDQwZDJlMTA3Y2E0MWQxZTk2ZWQ2OWNlNTUzMWRmYzE1OGVhMDZhOTVlZnx7InJlbW90ZV9hZGRyZXNzIjoiMjE4LjQ1LjIxMi4yIiwicmVxdWVzdF9pZCI6IjcyMEM6MDM1RjoxN0MyRUM0OjFEMkUxRkY6NUIxNzMwM0EiLCJ0aW1lc3RhbXAiOjE1MjgyNDYzMzgsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES,DIFF_EDIT_HISTORY">

  <meta name="html-safe-nonce" content="1d9d832c8a9a9cc121953e76bd27252e1688d569">

  <meta http-equiv="x-pjax-version" content="ac6fbfbaa16142dcaa9e0df8256a5acb">
  

      <link href="https://github.com/toshirot/csv2table/commits/master.atom" rel="alternate" title="Recent Commits to csv2table:master" type="application/atom+xml">

  <meta name="description" content="csv2table - This is the  jQuery plug-in that  reads the CSV file, and generates display an HTML table.">
  <meta name="go-import" content="github.com/toshirot/csv2table git https://github.com/toshirot/csv2table.git">

  <meta name="octolytics-dimension-user_id" content="154680" /><meta name="octolytics-dimension-user_login" content="toshirot" /><meta name="octolytics-dimension-repository_id" content="40425962" /><meta name="octolytics-dimension-repository_nwo" content="toshirot/csv2table" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="40425962" /><meta name="octolytics-dimension-repository_network_root_nwo" content="toshirot/csv2table" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/toshirot/csv2table/blob/master/js/jquery.csv2table-0.02-b-4.8.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    

        <div class="js-notice">
    <div class="py-2 px-3 f5 rounded-0" style="color: rgba(255,255,255,.85); background-color: #004275;">
        <div class="d-flex flex-items-start flex-items-center mx-auto" style="max-width: 980px;">
          <div class="d-flex flex-items-center my-1 my-md-0 mr-auto mr-md-0">
  <div class="flex-shrink-0" style="width: 28px; height: 28px;">
    <span style="float: left; width: 12px; height: 12px; border: 1px solid rgba(255,255,255,.01); margin: 1px; background-color: #f25022;"></span>
    <span style="float: left; width: 12px; height: 12px; border: 1px solid rgba(255,255,255,.01); margin: 1px; background-color: #7fba00;"></span>
    <span style="float: left; width: 12px; height: 12px; border: 1px solid rgba(255,255,255,.01); margin: 1px; background-color: #00a4ef;"></span>
    <span style="float: left; width: 12px; height: 12px; border: 1px solid rgba(255,255,255,.01); margin: 1px; background-color: #ffb900;"></span>
  </div>
  <svg height="16" style="margin-left: 6px; margin-right: 6px;" class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
  <svg height="25" class="octicon octicon-mark-github mr-2 text-white" viewBox="0 0 16 16" version="1.1" width="25" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</div>

          <div class="width-full width-md-auto my-1 my-md-0 mr-auto">
  Microsoft is acquiring GitHub! <a href="https://blog.github.com/2018-06-04-github-microsoft/" class="text-bold text-white" data-ga-click="MS banner, click, link - text:Read our blog">Read our blog</a> and <a href="https://blogs.microsoft.com/?p=52553832" class="text-bold text-white" data-ga-click="MS banner, click, link - text:Satya Nadella's post">Satya Nadella's post</a> to learn more.
</div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-notice-dismiss" action="/settings/dismiss-notice/generic_site_banner" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="C1r0x38ydwgy5lcwKfvZ9AQe0xpchIHfazYzysaXOAdZetnrZP/eofeoTl+1HXQUrNCvx9cX4PcPb9M4LNH8iQ==" />
            <button type="submit" class="btn-link text-white p-2 ml-1" data-ga-click="MS banner, click, dismiss (logged in)">
              <svg height="16" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="sr-only">Dismiss</span>
            </button>
</form>        </div>
    </div>
  </div>




        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative" role="search">
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="40425962" data-scoped-search-url="/toshirot/csv2table/search" data-unscoped-search-url="/search" action="/toshirot/csv2table/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          aria-label="Search this repository"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=R2GEJuvTMW5di4RdOgRd/h4hRUoFD2KdD8SBOQULtBY4x1lvQHud7HlWv51sPbXOZe1Rnok38Ve3ynkBCBC2RA=="
          spellcheck="false"
          autocomplete="off"
          autocapitalize="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" aria-label="Jump to..." href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" src="" width="28" height="28">
                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-search">
                      In this repository
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" viewBox="0 0 15 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li> 
              </ul>

              <ul class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
                <li>
                  <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar, group:" data-selected-links=" /marketplace" href="/marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:39933788" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-expanded details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="toshirot/csv2table">This repository</span>
  </div>
    <a class="dropdown-item" href="/toshirot/csv2table/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-expanded details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@hitnori" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/39933788?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">hitnori</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/hitnori" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/hitnori?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="0BgW0ZJm24LFA0JvpuUuR3/cUNvT+elQBl19yQD+SFHyiys2AC0OPMdpzf4wekJymZsxUxSTC004OGmlODk+0A==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="99dTA2aYUjQOqnHhfFh4dik8p5pV6zccZIuzsoT4UGPVRG7k9NOHigzA/nDqxxRDz3vGEpKB1QFa7qfevD8m4g==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      
<div class="flash flash-full js-notice flash-warn">
<div class="container">
      <a class="flash-action btn btn-sm compact" href="https://github.com/settings/emails">
        Configure email settings
        <svg class="octicon octicon-arrow-right" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z"/></svg>
</a>      <h4>
        Please verify your email address to access all of GitHub’s features.
      </h4>
      An email containing verification instructions was sent to kaiwai@tech.softbank.co.jp.



















</div>
</div>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="06g5z88q0ErRT2nvHXWRsCA9npq9pE0vqU/k3xo08grWnClen8txwbiovzvwkrZ9SHLUAgcsbZf+tdd/yWaiuA==" />      <input type="hidden" name="repository_id" id="repository_id" value="40425962" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/toshirot/csv2table/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/toshirot/csv2table/watchers"
            aria-label="3 users are watching this repository">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/toshirot/csv2table/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="0K5PT16PpuJdPkEZ8FtzDMnQWd7uTKOv6M2oXSxUeyN4IIfajfI5UcLKx6m9+2CDsliUdP/6kMHd3kUbQDDN/w==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar toshirot/csv2table"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/toshirot/csv2table/stargazers"
           aria-label="6 users starred this repository">
          6
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/toshirot/csv2table/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6ZEV5SemXNgVie3iW99CdjeQM6kcznxtNSe7FQ1ka7SVdmdFfMEWTx2Vmu9ALVEPA7jCu0sJkj8afOOybbD+RQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star toshirot/csv2table"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/toshirot/csv2table/stargazers"
           aria-label="6 users starred this repository">
          6
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/toshirot/csv2table/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="9dGi3wwIrZOynxJwMIYUVy49FnAw/jbUNFVh78VilQysNw2/GMCRXnE0BgtkMniBdkXqTvEMO+tJqUc7eXnL5A==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of toshirot/csv2table to your account"
                aria-label="Fork your own copy of toshirot/csv2table to your account">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/toshirot/csv2table/network" class="social-count"
       aria-label="3 users forked this repository">
      3
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/toshirot">toshirot</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/toshirot/csv2table">csv2table</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /toshirot/csv2table" href="/toshirot/csv2table">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /toshirot/csv2table/issues" href="/toshirot/csv2table/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /toshirot/csv2table/pulls" href="/toshirot/csv2table/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /toshirot/csv2table/projects" href="/toshirot/csv2table/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /toshirot/csv2table/wiki" href="/toshirot/csv2table/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /toshirot/csv2table/pulse" href="/toshirot/csv2table/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/toshirot/csv2table/blob/ec981cf37f118b60e362e0cf3add5c3d7c3fdb70/js/jquery.csv2table-0.02-b-4.8.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:4c6fb3224cecf8b036df6eccd5299726 -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/toshirot/csv2table/blob/master/js/jquery.csv2table-0.02-b-4.8.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/toshirot/csv2table/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/toshirot/csv2table"><span>csv2table</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/toshirot/csv2table/tree/master/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.csv2table-0.02-b-4.8.js</strong>
    </div>
  </div>


  <include-fragment src="/toshirot/csv2table/contributors/master/js/jquery.csv2table-0.02-b-4.8.js" class="commit-tease">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/toshirot/csv2table/raw/master/js/jquery.csv2table-0.02-b-4.8.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/toshirot/csv2table/blame/master/js/jquery.csv2table-0.02-b-4.8.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/toshirot/csv2table/commits/master/js/jquery.csv2table-0.02-b-4.8.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You need to verify your email address to propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You need to verify your email address to propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      696 lines (610 sloc)
      <span class="file-info-divider"></span>
    31.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>@utf-8</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span><span class="pl-k">=</span>{</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">		name     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">		version  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0.02-b-4.8<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">		update   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2014.6.14<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">		update   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://jsgt.org/lib/jquery/plugin/csv2table/v002/update.txt<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">		ver      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;csv2tableVersion&quot; style=&quot;color:#aaa&quot;&gt;&lt;/span&gt;&lt;script&gt;jQuery(function($){ $(&quot;.csv2tableVersion&quot;).html(&quot;version:csv2table-&quot;+$.csv2table.version) })&lt;/script&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		charset  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>utf-8<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		blog     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://ngw.jp/~tato/wp/?p=163<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">		demo     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://jsgt.org/lib/jquery/plugin/csv2table/v002/test.htm<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">		author   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Toshiro Takahashi<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">		lisence  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Public Domain<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>デフォルトCSSをリセットする</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">cssReset</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">cssDefault</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">				className_div      <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">				className_table    <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">				className_table_th <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">				className_table_td <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">				className_hoboNum  <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">				className_sortMark <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">				className_legends  <span class="pl-k">:</span> {}</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>デフォルトCSS $.csv2table.cssDefault.className_table_tdなどを変えることでデフォルトCSSを変更できます</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">		cssDefault<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">			className_div      <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>padding<span class="pl-pds">&#39;</span></span>           <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>10px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>margin<span class="pl-pds">&#39;</span></span>            <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			className_table    <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-collapse<span class="pl-pds">&#39;</span></span>   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>collapse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-spacing<span class="pl-pds">&#39;</span></span>    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>margin-bottom<span class="pl-pds">&#39;</span></span>     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>10px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">			className_table_th <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-color<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#eee #999 #777 #bbb<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-style<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>solid<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-width<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span>  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#ccc<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>         <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>12px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>padding<span class="pl-pds">&#39;</span></span>          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>text-align<span class="pl-pds">&#39;</span></span>        <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>center<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			className_table_td <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-color<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#eee #aaa #999 #ccc<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-style<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>solid<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>border-width<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>padding<span class="pl-pds">&#39;</span></span>           <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>8px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>font-size<span class="pl-pds">&#39;</span></span>         <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>12px<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">			className_hoboNum    <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			className_sortMark   <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>font-family<span class="pl-pds">&#39;</span></span>      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Arial<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>text-decoration<span class="pl-pds">&#39;</span></span>  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">			className_legends  <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>画像</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">		loadImg  : (new Image()).src=&#39;data:image/gif;base64,R0lGODlhMAAwAPYAAHZ2dnp6epGRkaWlpaurq62trbCwsLW1tbm5ub6+vsLCwsXFxcrKyszMzNPT09TU1N7e3uHh4efn5+vr6+zs7PDw8PX19fr6+v///3t7e39/f4CAgIeHh4qKio2NjZKSkpWVlZ+fn6KioqioqK+vr7a2tru7u729vcvLy9LS0t/f3+Dg4Obm5vLy8vT09Pv7+3h4eIODg4iIiIyMjJCQkJeXl5ubm52dnampqdjY2LGxsX5+fomJiZaWlqGhodnZ2X19fYGBgZSUlJiYmJycnLKysnl5eaampqqqqqysrL+/v8DAwMbGxsnJydbW1u/v7/f39/n5+bq6us7OzuLi4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/i1NYWRlIGJ5IEtyYXNpbWlyYSBOZWpjaGV2YSAod3d3LmxvYWRpbmZvLm5ldCkAIfkEAAoA/wAsAAAAADAAMAAABf8gJo5kaZ5oqq5k9TwVK88lEgQIrcsGABS73WThOPV+J8eCEixRCgPCxFTwAUsTaGHaFFUOg4HiUqoiS4rwwdIdQQjRSNlnKEXgA0h7dEmEEWwjZnUjFghhCWR7IhJwBA8kR4QiD3BbiyQMaooYBgEAk4ZhDE0UgSVfClwikiQTCgdMJhWrJlkHEJwjFbqddCUXMcAQB5cnC2EDCRIsrSsSCXgLKA54UQzCKM4oFAzWBUUor9YH2SY9AZOzYGEEqiwRh2K9kb8oF2kECHIzFw8Htc4BSKdiAoIHp2jQK7ENRUJM9UBBbNJw4oyKQSo02MiRAT8VniQ+Y8CAYwMHwiThJLNGasUDAQIgrdCULBm/OzXhtFxh4SEKTdbC8NNosuRHiBFImkRpsanTp1BV+OyycIU/BAGbTDjwoOqJeGHG7MGn5qg4BeTMZWQX5d2JCw6gtGMga083uQMKyDSBLMqyptCSTTtxK9csr7NMXCBmIOuICWpFUDjgVgUFWJEx0GpCE5CKC/J2YsoSZS8GCQs8kngQpgAzTH3+JGwwioQoZYhnQGhnlvYA0RhwEtCzxwI7BSa8/QaWZsCaPaSNZbpmy1LdLhSInKDZIMkCxxZpAucTdYTvcOVTVJAQIXN6pyEAACH5BAAKAP8ALAAAAAAwADAAAAb/QIxwSCwaj8ikcklsrVYtpnRaTA1GDapWihoMslvtZJE6Nkbf42m0ChcpBhFpYmx4wUTVJtNhuYcuJVcLL0VdaUQvIgAAHhR/QypobEV2WJUZABkokEMvJ14mLkR2iEItH4whUZ1CLGgDZUMsCyh+QyeMGyqtRIcmhUkTHYwjbhSjRi0lCo9JLySMHLdFLnRIEyQlKsFNTCoajCdHKiUGzkYLIlcn11QvIYwfrLOgXgtIDyReVyj0TCgyacCDgQIKEusGkJB1ZIICWANK/EtCIRUAEd0C8RuhwF2SFSYGiFDQTYkJXW08KRBpIqWUFw9MeEzCghgAA0YmmFCRTEvJ/2cjMnmYKaRnryMPNjBScHSLi3gAQBhtymQBIw0Mw7howLUrCpdJXIBgNGAJCxQounJNtsILxAGcmJjQ0AHskUP8vKRcARFW3CUvVPBa0uXtgMFb1Tb4ShXDirSKJzaeTLmy5Z+QpkppEZNoGJ0PMH8MOYBkpxcrB7Rk4hCixE7LNnZMkmKfSBIo0EEyaFvhAyQL3LZrzGLNPdHZtmFuIRqJ5MDmPAuZILkgM91IKCgogb2o9CWlgCl5Qfpvr2zrfs9CC/aBFxLUTtsTRcqLeRekTbeSdMXuGVNC8OXFYJkJUlod9hXxQnARaaYFBfvMYcQhBAkB4QDntDJGVkNYUhihECks8N1RpZhnGRL/cXiiMk9Ut+JkQQAAIfkEAAoA/wAsAAAAADAAMAAABv9AjHBILBqPyKRySWytVi2mdFp0DAYOqlbKuDa228kia2x4j48FBVykGAaFSRk3+BYnBbicLbQcrgsXRV11RRcLVwcWfEMqdDgrRWY4dkMrdAMqjEMXCVcIgkOElRgWCFcJoZsYEpgPRCsMDBJED1dxq0SEoEoXpzgMbBSLRi0HCntKFAsHa0YUtEh4ByqqQy3WvVFFFgwzMpFHiAM4Ccm5GDk2MAAwBUgPeVfA25utGgD5MQpJEwqYAw7UA9MigYx8ADTc0LRkBQI6/NhcaFADIQAaDbIlsfAAwTkqKkSwyycjwcApxLRMMBADYQxc6JZYUDADocIcMZdceFBj5EX/BhpzwhqAjySCkzIbKF3aIFzDg/k04IhWRAIDpkqJrbgy70owJitawriRIygGQl0HhLvEldyArzoR1FiQ8kgXgFfCWcDagIFTJnWRxOKLVKjhw4gRmwWzeOODAx/ZTDjwoHERhxBzKfj0FwmFf1wVbTLGFQeyJPG4FmDgbBMFBvLgvBLHNQFVdBMSYFrg2QC1I9imXEB6QcUBA62NTChM4YAaJp8FHrEQmQsdXkl8ec2J58psIVb91npUnbGnAQjqmnlLxBQqy1JUzOvcgA4pDGxxMGTk54qCbOvdd8FmAQUWxhsFJCdEgM/kARMjy5AhCTn3CeHAAuXFxGBiS1hRCwiHSjgBBYgkYhAEACH5BAAKAP8ALAAAAAAwADAAAAb/QIxwSCwaj8ikckmsRCQVpnRadAwGDapWyrgyttvJwnFseI+OBQVcpBQGhImRQRh8i5N3Qc4WVg5XChdFXQR3RApXBxZ9QxB1BBGEV1lEEXUDEI1DFwlXCIxDXVhEFghXCYObQhKYD5YMCxJED3V7q0SjCKpIpmdgFKFFfwprSxMKB8bDfEd5BxC8Q1FTF9REFxAHt0cLVwMJs7hDEgmYC0gOmHAM140UdN8FZEjI6wfuYH/fBArNSRFODRC06UIiAggiSFNy4cGBf30mIHggjMrCRhXHadzIsaOWCg0aMAgpUpKUBzpSqly5skABHS8LIKAmgd+3Q0oqfADAs6fP2J8/M7zCcOkbHDtSLOwEyjSoUD8kQ440yQQly6spY8KUucyj169gNWZsdJFJQwQQ2Uw48KAskoCB3FZLNCChXCH2vuHbtO9Kv7RCLjh445dB1z7wCA+Yh8QbnHAbL5Q7V68AtIsV7mLLhyFbSsB4OWOgcMAfEwrJRFuYoPmIrrHYBOJclQfOUFYLGFDF8OAKt1WdPlU0g3SIL3CtmUDwuxsD8dlFCWjaZAHQwDl1ZhtUBJtK7d+i2BmZYAs0FQpjXFNCs8D8uFGzOYV1foXe/CMVJEQQfX9jEAAh+QQACgD/ACwAAAAAMAAwAAAG/0CMcEgsGo/IpHJJbK1WLaZ0WnQMBg6qVsq4NrbbySJrbHiPjwUFXKQYBoVJGTf4FicFuJwttByuCxdFXXVFFwtXBxZ8Qyp0OCtFZjh2Qyt0AyqMQxcJVwiCQ4SVGBYIVwmhmxgSmA9EKwwMEkQPV3GrRISgShenOAxsFItGLQcKe0oUCwdrRhbJRngHKqpDLda9UYYqBwbORogDOAnRuROegEgPeVfA25sUDO1wr0gTCpgDB/BsflfjkDFZgYCOglwKfOBAEGmKhQcIzLGZgOABMS0XV2XLxbGjx498LDQYSbJBQykZkaxowKBkA2IrAI67EoyJrx4LUg7Sh6nhJf+ZdGouWbEBAAAb9o500XdFUymXLE8qWcHDKIANOGgZiQW1H6OYO6xyQOAVpJELD2xYBUDjpVklFhTMsJrhRjVGG5m4KWp0A64tDw9IlLLCR1ijPBKUTULQIJ8LDXqs7dEgLxEK+QAqYtQiQVWjGXw4RUOvAANwjFodvnrwiLgBCbR2/HEjg9ECSNxQO4JtyoWyFhbQ4CH1zmIKB9ToVcDvCAXZWhjQ4ZXEF02PeK4kZSVL6oNHg8F0+pTRzAChpU7BtqxFhbviDeiQwvATx+iQfwYoyGZ+/qFEOmkxwRsFoCZEf9Lk8Rcjy5AhyTjzCeHAAuF1hOBbTFhRCIZLOAEGBYcgDhEEACH5BAAKAP8ALAAAAAAwADAAAAf/gBiCg4SFhoeIiYqLhC0rKy2MkpOFKQMjDZSakigDA5mbmhMLKYcNI5+HKQsToYUUBiIkrYUNniiGEyQDJBSugy4llwsvhZ2phQqeJS6/gyqoIyu1l6CDK9EqzoMvJ54IzYO2yIIuCJ4KxduCLNEPhCwLKCyEPwOy9OuDxwjqiC/nyGmiEK5QixIKfC2aoKCEwkIuaB3SVUKFv0GRJr3IWEhFCQMPCy0QcemERH0YWHjztADRg12eRqDg6IwCChIkeZVCxBDVMpqhgnm6pOAkohUIRohIt+2FshEIpml8gMCoqwkIHhSkdLEpyq9gw4r95aKB2bMopH5lgQLFWbPh/1bEHDoAF6MXjxgdoztAKrahPu0uQgBEhlpEnXwOlVr2bYO0d4cAADCga6EVbh0DdbVgMpCdYxe5IDJ5yNbQLoNMViDWMqIRkz1YxeB60Quqsw2x4DDZQK4SD2ofQopOOKETk4No46ZsQFRGPYeW2HyIgpDJIvwdBMwqUQqYslCEXIQiAwAg1jDYVEwCtMiYJje9IA1ACNAJJ3y2nEiiouUWxmGggmoAnGAIXh+NR8gE1FGAUG6DkDCZDPkYBKEi4/SjCAsyTEYCWLqQ9AM8KCxQIQbInTeiPt18s9U46bXwwWREnOYKNJcchsEpAu0IxGSCkSXMAKxR06MLIkz2gSuCA+0yiyHHpCfIgADIcKEko7gnTjWH5KejWDCixgiPWoppiCOQmKkmBoEAACH5BAAKAP8ALAAAAAAwADAAAAf/gBiCg4SFhoeIiYqLhBUREhWMkpOFDgMDDZSakgyXDJubEwsOhw2ehw4LFKCFFAUDBBOGDAQDn4UTrwWyrIIVB5cKF4WdBLeECpcHFr2DELUEEcSXmYQRtQMQzYMXCZcIzIOdmIQWCJcJw9uCEtAP1gwLEoQPtbvrhOMH6ojmp6AUwhX6pYCXogkKDqwyVMGgoVwHIPAbVGGioguRCl2AcODeoQWXBiSYh2+QhATYFiBygA0Wg4zbKNAKWYAUIoQtD8Bk9SskgYKMIpwbIGzbhWQEEEibdOHBAYe9JiB4IJCSxWZVS2rdyrWrpgoNwoplsFSrBAYMxDZwkFGCz5DH+xRZyIpoXMhLS6/drRUX0QMBAt4tKrZ3KVi1aMsmKgIAQJGgaNU22MmKsWOvkyw/xsyoQOPNXq8W0rxIdOkHCKCOblzg4IEHpg8JDRabNKKjyhTfVJCTMiHPlxH1vPRTtaALDl4RZ7AQkW1EMpUPKCDYEEhYIxlZbn3xZMqbBSJerbg6ODffG4sUaP7QNwYKBxSwf/4+ofuGrMYh4Pf8wtC+2+RySXUY0PfAJR6t0803VQHHnSD+iBQbJRAQp9t2hehFgDbbWAAMUYY4qFEyAywToC6qiYiLLuyxQsEohwAHGiGpGLeVihpxRggCAQSAgI6LVPDAA+4B2VUgACH5BAAKAP8ALAAAAAAwADAAAAf/gBiCg4SFhoeIiYqLhC0rKy2MkpOFKQMjDZSakigDA5mbmhMLKYcNI5+HKQsToYUUBiIkrYUNniiGEyQDJBSugy4llwsvhZ2phQqeJS6/gyqoIyu1l6CDK9EqzoMvJ54IzYO2yIIuCJ4KxduCLNEPhCwLKCyEPwOy9OuDxwjqiC/nyGmiEK5QixIKfC2aoKCEwkIuaB3SVUKFv0GRJr3IWEhFCQMPCy0QcemERH0YWHjztADRg12eRqDg6IwCChIkeZVCxBDVMpqhgnm6pOAkohUIRohIt+2FshEIpml8gMCoqwkIHhSkdLEpyq9gw4r95aKB2bMopH5lgQLFWbPh/1bEHDoA16IVFjnRHSoV21CfdhOtkLEDgV6fQ7VhKPu2QVpFLwYAACCk66EVbhsD1ZRiBwAYLccucjFk8o2tog8pmLzjXWoMljFM8DB5hMZQLx6UsGpgsox8C0s8iH00oIKOMSYbZuT0m9pEPYeW4PhCxOQPmw8d/Fs0UQqYslCEROEZRmBGNnF6IuHa0IKYJg1+ME0c+gmfoXORqGj5xOQYPyyykSEveAQSdNmxkBwAJCxCQUPZtWCVJCT4NiE3AZ23zg+eAXACPCgsABwGKURz4SYu3HAdTeNYs1hAJ9RHCQowALCDixicIhAGfg2gmDMt0AaACF21WMgL7w3AzCs2LMhg44/ieIIjBhTs0ss62HxoiC2YqMLKazneAqYiOu40pnaPZHcmWIEAACH5BAAKAP8ALAAAAAAwADAAAAf/gBiCg4SFhoeIiYqLhC0rKy2MkpOFDgMDDpSakgyXDZubEwuZhg2ehw8LFKCFFAYDBROlOAOfhRMFsLKsghYHlwsXhZ21hRcLlwcWvIMqtDgrhaY4toMrtAMqzIMXCZcIwoPE1RgWCJcJ4dsYEtgPhCsMDBKED5ex64TE4IoX5zgMWFFYZqjFAQW7FFFYcGCVIQsJDeE6oELdoBYW+0UypuKAAYeGkA3AkSBivgnegCF6kOsSwI3bKDBoCesdogkKsA04AJOVr0sjETJagYCWgoybLigYiSDapAsPEIBkNgHBA4KasK5Dmq+r169gfTYYS5aB036UJMgjO5bgCqA6/wMmsrCgBz9GxFxecnoN6MgBcg1dyGHDCIAY2vD+9evUAluyZwm1AwKgMo/IieI9btCTUQsEPCoDADIAc1huDD6IBmDjAdewF1SEoFx5hgKtpwfhon34I6jXilokCF3ZiI/EoQ64ftqgx+oeDYAvWjqgKSPZhi0n6KzJIFyhiBTEKA4EB711MmkWsGmoQPEQOcCixLYA0QoeMxjgxoDxKffYHk1ViAQCCkLBAaowQoECPB0CESumVCedP5cEdlJL7LEjT2QPPGMSL918o1WEFpqDjnSTODMSZg3QQg4GfeGAHC8/DXCUNKcQolQy+2mCiy6l5EgIBbngE9Moh0zzohggDizwIVgRLpnbIZYUM+UijkBy5ZaDBAIAIfkEAAoA/wAsAAAAADAAMAAABv9AjHBILBqPyKRySaxEJBWmdFp0DAYNqlbKuDK228nCcWx4j44FBVykFAaEiZFBGHyLk3dBzhZWDlcKF0VdBHdEClcHFn1DEHUEEYRXWUQRdQMQjUMXCVcIjENdWEQWCFcJg5tCEpgPlgwLEkQPdXurRKMIqkimZ2AUoUV/CmtLEwoHxsN8R3kHELxDUVMX1EQXEAe3RwtXAwmzuEMSCZgLSA6YcAzXjRR03wVkSMjrB+5gf98ECs1JEU4NELTpQiICCCJIU3LhwYF/fSYgeCCMysJGFcdp3Mixo5Y/BULqKDBSh8mTJE+afCVFAoMGMF86oPYgA4CbOHPq1PkhI5LcUVcwScJQc6dRoz25wPl2ZWgFBCRFplRJ9SRLJhEYvITZYKbHr2DDdvTZ5yKThgggsplw4IFZJAEDva2WaMCBoUrsfcO3aV9Qf0guOHgTlMGydwwID5iHxBuccBsvlDtXrwC0ixXmFrFmJJtJtUMm5BNC4QDgJRSSjcZgYYLmn5/IchJ4CFceOFcxSFjAAC/RK9xWdYpNxIydUgJT4YIQ1DcG47UxXIKjaZMFQAPn1IluUJHsKbeDi2JnZIIt0FoojDkyqlKVBeg1jorOSezzK/TsH6kgIcJq/RsFAQAh+QQACgD/ACwAAAAAMAAwAAAH/4AYgoOEhYaHiImKi4QtKystjJKThQ1HRw2UmpKWmJubT0sOh52Zhg5ME5+FE0lHSE+GnU2GT0k+RbGrglAHl0tRlZemhEuXB5G7ghBIlyvCnoQrSD5IEMqDUUqXJlCEpYRQJpdKwdiCEs1HTtJNTBKETpdI8OeDTdzmiFEmPke0nyToKtTiwBJVi0IdGBgO4aEVMmY08UZQ36IoyQhFgXAgCUNCSQAAyHDjhz1CE7Yd8cEE0ZINIgHsSFIP25Mm6o4kYYcIgo8MMWWYyPip4KVqBy82+BATgJAGFjUZO3Lg2aQWSmTE3OHj2qcJJpxQ1NQKpsgNRRxSGrsKwg2gIv9nLGF78mITpjFtOIhaNxFWrSJ3ILF6DkqDw4gbECaUbkfQxYlWNGiSuEGyFZcyXwJoKMoPG4EhI8Kn2ZmgaaX/KYLCRIgJvodwprba4jBlxKIN0VW04nZion2DCx9OXHfd3YyiODHxcRVYsZRWjPMB7NwSfyZys1qSExm2FkUyI0mKyEFOJE2aF2VyftQhJiuRKKl5MmXmlocmFDkAgW8L2Idg1BlHHiUyAXCCPGGQeoUohCAGLahFCT4+vKZIFL6oVpcErqzDGBNNLCaPThLuog03bIEziDgrlWMPBPNApuIgqB3hlTJGHbGELMMUEsVUByBHyRPhFVgIacQM0gocLiVuMoEopPR4SirFCTJjlYhciaUhjkCy5ZaBAAAh+QQACgD/ACwAAAAAMAAwAAAH/4AYgoOEhYaHiImKi4QtVFQtjJKThVMDA1OUmpKWmJubKiQnL4adKIcPCxOfhRIyAEEqpZenhRMkAySrrIIUNAAAIi6Vl5mFCgMiJcO8gigwABrGgyjFhVQjAyOyzYIuIcBCkYOd0xguUpcKpN2CDxrAJ4RUCyhUhD+XI7vtgiPAMiQoepHO0ycKzGy9AkBi0QQFJSgccsHP0K0SKtgROgEsyI9FL8YReqGiRJGKhBaI0HYCZQshwERonPTw0oAFiB7g0odCJIYp8GCYW0QBRbZLJFIkenh0QAmRL0QAoyGRUYsSNkcoQGnoBRUp2dYRUhEEmBRJL5ANkHJv0osHUv+4FgEokNEEKQ9mTkpIaIIHYCP29jsGTMODwZ9aDAEWgi9iSSngAcDZzsUUFFMuX26L6MUAYEP0HqKiGXNmZlRsqq6ViIoMDWcZVVO9sm1q1bQYUckoaTZubi0ya978GAMV08N9Fl/OvLlzDKJ5RQcJl+unCSXyUvqqbrpbtWy9C2Jq82m3q1m3JkqxUxuKqt2KkliZS2nXBfrUP55w4ihliyRgJFoL4o2kHHQlnbSUY72UoJ8iFEB04DkTFHhIJ1KIR1BuiE1w1EeDHLcAZxg8kM0+g6V1iRR8lUMIOpeM0o8KJ5L4E4chHsVNMy6UsJICswzAmiAv4OcUg5rckgsmV7MNhQEFuJAAHy8TLGBfIU0eksICUzLn4nOKfAkmIo5AMuaYgQAAOw==&#39;,//&#39;./img/icon-loadinfo.gif&#39;,  //Dafault loading IMG</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		sortNImg <span class="pl-k">:</span> (<span class="pl-k">new</span> <span class="pl-en">Image</span>()).<span class="pl-smi">src</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>data:image/gif;base64,R0lGODlhCwAJAIAAAP///4GBgSH5BAUUAAAALAAAAAALAAkAAAIRhB2nGLnQ4or0WUbdyVZebRQAOw==<span class="pl-pds">&#39;</span></span>,<span class="pl-c"><span class="pl-c">//</span>&#39;./img/icon-n.gif&#39;,         //Dafault sort IMG N</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">		sortDImg <span class="pl-k">:</span> (<span class="pl-k">new</span> <span class="pl-en">Image</span>()).<span class="pl-smi">src</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>data:image/gif;base64,R0lGODlhCwAJAIABADCCaPFzMCH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAALAAkAAAIOjI+pu+APEozqsUCvVgUAOw==<span class="pl-pds">&#39;</span></span>,<span class="pl-c"><span class="pl-c">//</span>&#39;./img/icon-d-green.gif&#39;,   //Dafault sort IMG D</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		sortAImg <span class="pl-k">:</span> (<span class="pl-k">new</span> <span class="pl-en">Image</span>()).<span class="pl-smi">src</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>data:image/gif;base64,R0lGODlhCwAJAIABADCCaPFzMCH5BAEKAAEALAAAAAALAAkAAAINjI+pCmsAF5xpWoezKwA7<span class="pl-pds">&#39;</span></span> ,<span class="pl-c"><span class="pl-c">//</span>&#39;./img/icon-a-green.gif&#39;,   //Dafault sort IMG A</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">		setting  <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">		data     <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		_rowsAry <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">		_doc     <span class="pl-k">:</span> <span class="pl-c1">document</span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">		err      <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		f        <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">classifyByCol</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">id</span>,<span class="pl-smi">colIndex</span>,<span class="pl-smi">myCompAry</span>,<span class="pl-smi">nolegend</span>){</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> toj<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>,<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id)),oj<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tr &gt; td:nth-child(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(colIndex<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>,toj)</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>nolegend){</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> legend<span class="pl-k">=</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#csv2table-legend-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id).<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-c1">0</span>)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;csv2table-legends&quot; id=&quot;csv2table-legend-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>)<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#csv2table-legend-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">toj</span>.<span class="pl-c1">after</span>(</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">legend</span>.<span class="pl-c1">append</span>(</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;csv2table-legends&quot; id=&quot;csv2table-legend-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">append</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id][<span class="pl-c1">0</span>][colIndex]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">						)</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">					)</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span>Eg. myCompAry is [[&#39;&gt;10&#39;,&#39;#eee&#39;],[&#39;&gt;30&#39;,&#39;#ddd&#39;],[&#39;&gt;50&#39;,&#39;#bbb&#39;]]</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-en">each</span>(myCompAry,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">					oj</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:_csv2table_myComp(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>background<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>[<span class="pl-c1">1</span>])</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-k">!</span>nolegend){</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> hanrei<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span style=&quot;background-color:<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">						          <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/span&gt; <span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#csv2table-legend-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex)</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">append</span>(hanrei<span class="pl-k">+</span><span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&amp;nbsp;&amp;nbsp;&amp;nbsp;<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				})</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">csv2table</span><span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">url</span>,<span class="pl-smi">setting</span>){</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-k">!</span>setting)<span class="pl-k">var</span> setting<span class="pl-k">=</span>{};</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> contents<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">el</span><span class="pl-k">=</span><span class="pl-c1">this</span>,id<span class="pl-k">=</span><span class="pl-c1">this</span>[<span class="pl-c1">0</span>].<span class="pl-c1">id</span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">		op <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id] <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">			url                <span class="pl-k">:</span> url,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			nowloadingImg      <span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">loadImg</span>,              <span class="pl-c"><span class="pl-c">//</span>Image of now loading...</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">			nowloadingMsg      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>now loading...<span class="pl-pds">&#39;</span></span>,                 <span class="pl-c"><span class="pl-c">//</span>Massege of  now loading...</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			sortNImg           <span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">sortNImg</span>,             <span class="pl-c"><span class="pl-c">//</span>Sort IMG N</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			sortDImg           <span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">sortDImg</span>,             <span class="pl-c"><span class="pl-c">//</span>Sort IMG D</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			sortAImg           <span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">sortAImg</span>,             <span class="pl-c"><span class="pl-c">//</span>Sort IMG A</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			removeDoubleQuote  <span class="pl-k">:</span> <span class="pl-c1">true</span>,                             <span class="pl-c"><span class="pl-c">//</span> remove &quot; of &quot;hogehoge&quot;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			appendThead        <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span>Array. Append a Row of Thead.(e.g. [&quot;Name&quot;,&quot;Address&quot;])</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			col_midasi         <span class="pl-k">:</span> <span class="pl-c1">0</span>,                                <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			row_sep            <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,                               <span class="pl-c"><span class="pl-c">//</span>Separator of rows. \r|\n|\r\n default auto get by getCRLF method</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			col_sep            <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>,                              <span class="pl-c"><span class="pl-c">//</span>Separator(,|\t|;) of cols. default &#39;,&#39;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">			crlf2br            <span class="pl-k">:</span> <span class="pl-c1">false</span>,                            <span class="pl-c"><span class="pl-c">//</span>if true, CR,LF or CRLF of the contents will be changed to the &lt;br&gt;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			sortable           <span class="pl-k">:</span> <span class="pl-c1">true</span>,                             <span class="pl-c"><span class="pl-c">//</span>col sort</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			select             <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>,                              <span class="pl-c"><span class="pl-c">//</span>select col lists. default &#39;*&#39; is all cols.</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			orderBy            <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span>array of sort col. orderBy:[[colNo|&#39;colName&#39;,&#39;sortType&#39;]]</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			where              <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span>array of where : [{&#39;ColName&#39;:&#39;condition&#39;}] etc.</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">			limit              <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span>array of limit : [offset,len]</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">			col0color          <span class="pl-k">:</span> <span class="pl-c1">true</span>,                             <span class="pl-c"><span class="pl-c">//</span>col[0] color sync jQchart line_strokeStyle</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">			numArignRight      <span class="pl-k">:</span> <span class="pl-c1">true</span>,                             <span class="pl-c"><span class="pl-c">//</span>Set the Number TD to &quot;textAlign : &#39;right&#39;&quot;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">			onload             <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span>collback function (id,op,data,ary) {}</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			use                <span class="pl-k">:</span> <span class="pl-c1">null</span>,                             <span class="pl-c"><span class="pl-c">//</span> &#39;jqchart:line#canvasID&#39;</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">			className_div      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-div<span class="pl-pds">&#39;</span></span>,                  <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			className_table    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-table<span class="pl-pds">&#39;</span></span>,                <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			className_table_th <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-table-th<span class="pl-pds">&#39;</span></span>,             <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">			className_table_td <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-table-td<span class="pl-pds">&#39;</span></span>,             <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			className_hoboNum  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-hoboNum<span class="pl-pds">&#39;</span></span>,              <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			className_sortMark <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-sortMark<span class="pl-pds">&#39;</span></span>,             <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">			className_legends  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>csv2table-legends<span class="pl-pds">&#39;</span></span>               <span class="pl-c"><span class="pl-c">//</span>className</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		},setting);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use</span>){ <span class="pl-c"><span class="pl-c">//</span>use      : &#39;jqchart:bar#canvasMyID&#39;,</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span>      <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">use</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span> <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">use</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span> <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">op</span>.<span class="pl-smi">use_api_box</span>  <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">use</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>Custom Selectors</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-smi">$</span>.<span class="pl-smi">expr</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>], {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>_csv2table_hoboNum is match to number or Number-like (3 digit + comma)</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>for Set the Number TD to &quot;textAlign : &#39;right&#39;&quot;</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_csv2table_hoboNum</span>  <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">i</span>,<span class="pl-smi">m</span>){</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">textContent</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">innerText</span><span class="pl-k">||</span><span class="pl-en">$</span>(a).<span class="pl-c1">text</span>()<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">					c <span class="pl-k">=</span> <span class="pl-c1">Number</span>(</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">chkThreeComma</span>(b).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(b) <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(c);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_csv2table_myComp</span>  <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">i</span>,<span class="pl-smi">m</span>){</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-c1">Number</span>(</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">					(<span class="pl-smi">a</span>.<span class="pl-smi">textContent</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">innerText</span><span class="pl-k">||</span><span class="pl-en">$</span>(a).<span class="pl-c1">text</span>()<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>,<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">typeof</span> b<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span><span class="pl-k">?</span> <span class="pl-c1">eval</span>(b<span class="pl-k">+</span>m[<span class="pl-c1">3</span>])<span class="pl-k">:</span><span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(contents).<span class="pl-c1">before</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;csv2table-loading&quot;&gt;&lt;img src=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">nowloadingImg</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt; <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">nowloadingMsg</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> &lt;/div&gt;<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> fetch_param<span class="pl-k">=</span> (<span class="pl-smi">url</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> fetch_url <span class="pl-k">=</span> url <span class="pl-k">+</span> fetch_param <span class="pl-k">+</span> (<span class="pl-k">new</span> <span class="pl-en">Date</span>()).<span class="pl-c1">getTime</span>(); <span class="pl-c"><span class="pl-c">//</span>2013.04.11 Thanx MORI Shingo ‏@babydaemons</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-c1">get</span>(fetch_url,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">data</span>,<span class="pl-smi">textStatus</span>){</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span><span class="pl-k">=</span><span class="pl-en">getCRLF</span>(data);</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">appendThead</span>)data<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">appendThead</span>.<span class="pl-c1">join</span>(<span class="pl-smi">op</span>.<span class="pl-smi">col_sep</span>)<span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span><span class="pl-k">+</span>data;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-c1">data</span>[id]<span class="pl-k">=</span>data;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.csv2table-loading<span class="pl-pds">&quot;</span></span>).<span class="pl-en">fadeOut</span>();</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(contents).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>display<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>).<span class="pl-en">html</span>(<span class="pl-en">mkRowsAry</span>(id,data));</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setCSS</span>(id);</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(contents).<span class="pl-en">fadeIn</span>();</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:line<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>line<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:bar<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>bar<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,data,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>ccchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>){</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">				    <span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,data,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-smi">onload</span>)<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-en">onload</span>(id,op,data,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		},<span class="pl-s"><span class="pl-pds">&#39;</span>html<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-en">wrtTable</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">colIndex</span>,<span class="pl-smi">id</span>,<span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id).<span class="pl-en">html</span>(<span class="pl-en">mkRowsAry</span>(id,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id],op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex],colIndex));</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setCSS</span>(id);</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:line<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>line<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:bar<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>bar<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-c1">data</span>[id],<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>ccchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>){</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">				    <span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,data,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-smi">onload</span>)</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">			    <span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-en">onload</span>(id,op,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-c1">data</span>[id],<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(callback)<span class="pl-en">callback</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex],colIndex,id);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-en">reset</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">id</span>){</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">			rowsAry<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">escapeStrComma</span>(<span class="pl-smi">op</span>.<span class="pl-smi">col_sep</span>,<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span>,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-c1">data</span>[id],<span class="pl-smi">op</span>.<span class="pl-smi">removeDoubleQuote</span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id).<span class="pl-en">html</span>( <span class="pl-en">mkTable</span>(id,rowsAry));</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">sortable</span>)<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th .sortimg<span class="pl-pds">&#39;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">op</span>.<span class="pl-smi">sortNImg</span> )</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setCSS</span>(id);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:line<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>line<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_charttype</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart:bar<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>bar<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-c1">data</span>[id],<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>ccchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>){</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">				    <span class="pl-smi">op</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_type</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">useChart</span>(id,op,data,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]);</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">orderWk</span>(<span class="pl-smi">ary</span>,<span class="pl-smi">sortType</span>,<span class="pl-smi">colIndex</span>){</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ary</span>.<span class="pl-smi">head</span><span class="pl-k">=</span><span class="pl-smi">ary</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,<span class="pl-smi">op</span>.<span class="pl-smi">col_midasi</span><span class="pl-k">+</span><span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> rowsAry<span class="pl-k">=</span><span class="pl-smi">ary</span>.<span class="pl-c1">slice</span>(<span class="pl-smi">op</span>.<span class="pl-smi">col_midasi</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-smi">ary</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">			rowsAry<span class="pl-k">=</span><span class="pl-en">sortwk</span>(rowsAry,sortType,colIndex);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">			rowsAry<span class="pl-k">=</span>ary<span class="pl-k">=</span><span class="pl-smi">ary</span>.<span class="pl-smi">head</span>.<span class="pl-c1">concat</span>(rowsAry)</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> rowsAry</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">mkRowsAry</span>(<span class="pl-smi">id</span>,<span class="pl-smi">data</span>,<span class="pl-smi">sortType</span>,<span class="pl-smi">colIndex</span>){</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> rowsAry<span class="pl-k">=</span><span class="pl-c1">null</span>,rewrite<span class="pl-k">=</span><span class="pl-c1">true</span>,<span class="pl-c"><span class="pl-c">//</span>zanntei</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">				ofs,len</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sortType <span class="pl-k">&amp;&amp;</span> rewrite){</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">				rowsAry<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">orderWk</span>(data,sortType,colIndex);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">				rowsAry<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">escapeStrComma</span>(<span class="pl-smi">op</span>.<span class="pl-smi">col_sep</span>,<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span>,data,<span class="pl-smi">op</span>.<span class="pl-smi">removeDoubleQuote</span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">where</span>){</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> _rowsAry <span class="pl-k">=</span> rowsAry,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">						rowsAry  <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">						wlen     <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">where</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">						colNamesArry <span class="pl-k">=</span>_rowsAry[<span class="pl-c1">0</span>] ;</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-smi">_rowsAry</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span> ;i<span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;i<span class="pl-k">--</span>){ <span class="pl-c"><span class="pl-c">//</span>最終行はheaderなので無視</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> sikis<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,siki<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,colValue<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,value<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,colNo<span class="pl-k">=</span><span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>,ok<span class="pl-k">=</span><span class="pl-c1">false</span>;j<span class="pl-k">&lt;=</span>wlen;j<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>&amp;&amp;<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>||<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">								siki <span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j];</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">								sikis <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>siki;ok<span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j].<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">									colNo<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j][<span class="pl-c1">0</span>]; value<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">trim</span>(<span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j][<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">for</span>(<span class="pl-k">var</span> k <span class="pl-k">in</span> <span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j]){</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">var</span> colName<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">trim</span>(k);value<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">trim</span>(<span class="pl-smi">op</span>.<span class="pl-smi">where</span>[j][k]);<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">									}</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">									colNo<span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(colName, colNamesArry);<span class="pl-c"><span class="pl-c">//</span>get colNo</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> ok<span class="pl-k">=</span><span class="pl-en">errLog</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>op.where operetor<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">if</span>(<span class="pl-smi">value</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>==(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>g</span>)){</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">										siki <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>_rowsAry[i][colNo]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;==&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">										sikis <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>siki;ok<span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">value</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>like<span class="pl-c1">\s</span><span class="pl-k">*</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>g</span>)){</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">var</span> reg<span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>_<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>###adrsr###<span class="pl-pds">&#39;</span></span>) ; <span class="pl-c"><span class="pl-c">//</span>escape _</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>) ;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>###adrsr###<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span>) ;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>%<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>###parst###<span class="pl-pds">&#39;</span></span>) ; <span class="pl-c"><span class="pl-c">//</span>escape %</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>.*<span class="pl-pds">&#39;</span></span>) ;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-smi">reg</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>###parst###<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>) ;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">										reg<span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>reg<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>$<span class="pl-pds">&#39;</span></span> ;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">									siki<span class="pl-k">=</span>(_rowsAry[i][colNo].<span class="pl-c1">match</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(reg,<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>)))<span class="pl-k">?</span><span class="pl-c1">true</span><span class="pl-k">:</span><span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">									sikis <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>siki;ok<span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-en">chkThreeComma</span>(_rowsAry[i][colNo])){</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">									colValue<span class="pl-k">=</span>_rowsAry[i][colNo].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">									siki <span class="pl-k">=</span> colValue<span class="pl-k">+</span><span class="pl-smi">value</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">if</span>(<span class="pl-en">chkSiki</span>(siki) <span class="pl-k">!=</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">										sikis <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>siki;ok<span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">									} <span class="pl-k">else</span> ok<span class="pl-k">=</span><span class="pl-en">errLog</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>op.where operetor<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">								} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">									colValue<span class="pl-k">=</span> _rowsAry[i][colNo] ;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">									siki <span class="pl-k">=</span> colValue<span class="pl-k">+</span>value;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">if</span>(<span class="pl-en">chkSiki</span>(siki) <span class="pl-k">!=</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">										sikis <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>siki;ok<span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">									} <span class="pl-k">else</span> ok<span class="pl-k">=</span><span class="pl-en">errLog</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>op.where operetor<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span>変な値が入るとエラーになる</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">							<span class="pl-c"><span class="pl-c">//</span>http://jsgt.org/lib/jquery/plugin/csv2table/v002/test/where-2.htm#5&quot;+alert()+&quot;//&quot;8&quot;==&quot;5&quot;+alert()+&quot;&quot;</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">							sikis<span class="pl-k">=</span> <span class="pl-smi">sikis</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);<span class="pl-c"><span class="pl-c">//</span>fixed follows</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span>(e) {  <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-c1">eval</span>(sikis) <span class="pl-k">&amp;&amp;</span> ok)<span class="pl-smi">rowsAry</span>.<span class="pl-c1">unshift</span>(_rowsAry[i]);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">rowsAry</span>.<span class="pl-c1">unshift</span>(_rowsAry[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span>rowsAry;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">resetSortImg</span>(id);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">orderBy</span>){</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> cv,orderlen <span class="pl-k">=</span> <span class="pl-smi">op</span>.<span class="pl-smi">orderBy</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span>orderlen ;i<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>;i<span class="pl-k">--</span>){</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> cv<span class="pl-k">=</span><span class="pl-en">getColNoAndValue</span>(<span class="pl-smi">op</span>.<span class="pl-smi">orderBy</span>[i],rowsAry[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">						rowsAry<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">orderWk</span>(</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">							rowsAry,<span class="pl-smi">cv</span>.<span class="pl-smi">val</span>,<span class="pl-smi">cv</span>.<span class="pl-smi">cln</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">						)</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">limit</span>){</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> lmt<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">limit</span>,lmlen<span class="pl-k">=</span><span class="pl-smi">lmt</span>.<span class="pl-c1">length</span>,_rowsAry<span class="pl-k">=</span>[],zan,end;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(lmlen<span class="pl-k">==</span><span class="pl-c1">1</span>)ofs<span class="pl-k">=</span><span class="pl-c1">1</span>,len<span class="pl-k">=</span>lmt[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> <span class="pl-k">if</span>(lmlen<span class="pl-k">==</span><span class="pl-c1">2</span>)ofs<span class="pl-k">=</span>lmt[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-c1">1</span>,len<span class="pl-k">=</span>lmt[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">else</span> ofs<span class="pl-k">=</span><span class="pl-c1">1</span>,len<span class="pl-k">=</span><span class="pl-smi">rowsAry</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">					zan<span class="pl-k">=</span><span class="pl-smi">rowsAry</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>ofs;</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(len<span class="pl-k">&gt;</span>zan)len<span class="pl-k">=</span>zan;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">					end<span class="pl-k">=</span>ofs<span class="pl-k">+</span>len;</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-smi">rowsAry</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&gt;</span><span class="pl-c1">0</span>;i<span class="pl-k">--</span>){</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(ofs<span class="pl-k">&lt;=</span>i <span class="pl-k">&amp;&amp;</span> i<span class="pl-k">&lt;</span>end)<span class="pl-smi">_rowsAry</span>.<span class="pl-c1">unshift</span>(rowsAry[i]);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_rowsAry</span>.<span class="pl-c1">unshift</span>(rowsAry[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">					rowsAry<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span>_rowsAry;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tableHtm<span class="pl-k">=</span><span class="pl-en">mkTable</span>(id,rowsAry);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> tableHtm;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">errLog</span>(<span class="pl-smi">msg</span>){</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">err</span>.<span class="pl-c1">unshift</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[Err] <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>msg) ;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">getColNoAndValue</span>(<span class="pl-smi">opr</span>,<span class="pl-smi">colNamesArry</span>){</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> colNo<span class="pl-k">=</span><span class="pl-c1">null</span>,value<span class="pl-k">=</span><span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">typeof</span> opr[<span class="pl-c1">0</span>]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>)colNo<span class="pl-k">=</span>opr[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> opr[<span class="pl-c1">0</span>]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">				colNo<span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(<span class="pl-smi">$</span>.<span class="pl-en">trim</span>(opr[<span class="pl-c1">0</span>]),colNamesArry);</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			value<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">trim</span>(opr[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> {cln<span class="pl-k">:</span>colNo,val<span class="pl-k">:</span>value}</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">chkCompOpr</span>(<span class="pl-smi">siki</span>){</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">siki</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&amp;&amp;<span class="pl-k">|</span><span class="pl-cce">\|\|</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">siki</span>.<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">chkSiki</span>(<span class="pl-smi">siki</span>){</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">siki</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-c1">[&lt;&gt;<span class="pl-cce">\!</span>=][=]</span><span class="pl-k">{0,}</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>)</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">getCRLF</span>(<span class="pl-smi">content</span>){</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">		  <span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">return</span> <span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">content</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;</span><span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">content</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;</span><span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">content</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">&gt;</span><span class="pl-k">-</span><span class="pl-c1">1</span>){</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">			}<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span>  <span class="pl-en">mkTable</span>(<span class="pl-smi">id</span>,<span class="pl-smi">rowsAry</span>){</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">!</span>rowsAry)<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-smi">rowsAry</span>.<span class="pl-c1">length</span>,col<span class="pl-k">=</span>rowsAry[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">				s<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">col_midasi</span><span class="pl-k">+</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> htm<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>見出し行の処理</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-c1">0</span>; k<span class="pl-k">&lt;</span>col; k<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> si<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>-sortimg-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k)[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">					sortimgsrc<span class="pl-k">=</span>(si)<span class="pl-k">?</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>-sortimg-<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k)[<span class="pl-c1">0</span>].<span class="pl-smi">src</span><span class="pl-k">:</span><span class="pl-smi">op</span>.<span class="pl-smi">sortNImg</span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k]<span class="pl-k">!=</span><span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">					 <span class="pl-k">if</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>)sortimgsrc<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">sortDImg</span>;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>)sortimgsrc<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">sortAImg</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">if</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>N<span class="pl-pds">&#39;</span></span>)sortimgsrc<span class="pl-k">=</span><span class="pl-smi">op</span>.<span class="pl-smi">sortNImg</span>;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;th id=&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>-th-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				   <span class="pl-k">+</span> rowsAry[<span class="pl-smi">op</span>.<span class="pl-smi">col_midasi</span>][k];</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">sortable</span>)</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;img id=&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>-sortimg-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; class=&#39;sortimg&#39; src=&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>sortimgsrc<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; border=&#39;0&#39;&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">				htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/th&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k])op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>k]<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-c"><span class="pl-c">//</span>memo of sortType</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">			htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>data行の処理</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i<span class="pl-k">=</span>s; i<span class="pl-k">&lt;</span>row; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">					htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span>列の処理</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>; j<span class="pl-k">&lt;</span>col; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">						htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;td&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">						   <span class="pl-k">+</span> rowsAry[i][j]</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">						   <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/td&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">					htm<span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tableHtm<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_doc</span>.<span class="pl-c1">getElementById</span>(id)</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">				.<span class="pl-smi">innerHTML</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;table&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>htm<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/table&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> tableHtm;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>//</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> 並べ替え</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> @parame dataAry    並べ替え対象配列</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> @parame sortType   昇順A|降順D</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> @parame colIndex   ソート列</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">sortwk</span>(<span class="pl-smi">dataAry</span>,<span class="pl-smi">sortType</span>,<span class="pl-smi">colIndex</span>){</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">!</span>dataAry)<span class="pl-k">return</span> ;</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">			sortType<span class="pl-k">=</span><span class="pl-smi">sortType</span>.<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(sortType<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>D<span class="pl-pds">&quot;</span></span>)op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>colIndex]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> ci<span class="pl-k">=</span>colIndex,</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">				are3comma<span class="pl-k">=</span><span class="pl-en">chkThreeComma</span>(dataAry[<span class="pl-c1">0</span>][ci]),</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">				mved3comma<span class="pl-k">=</span><span class="pl-smi">are3comma</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">isNaN</span>(dataAry[<span class="pl-c1">0</span>][ci]) <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(mved3comma)){</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> rowlen<span class="pl-k">=</span><span class="pl-smi">dataAry</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(are3comma <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>rowlen;j<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-en">chkThreeComma</span>(dataAry[j][ci]).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) ;</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">						dataAry[j].<span class="pl-c1">unshift</span>((<span class="pl-c1">isNaN</span>(d))<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>d);</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">					ci<span class="pl-k">=</span><span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">				(sortType<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>D<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">dataAry</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span> (<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> (b[ci] <span class="pl-k">-</span> a[ci]) ;<span class="pl-c"><span class="pl-c">//</span>降順</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">				})<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">dataAry</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span> (<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> (a[ci] <span class="pl-k">-</span> b[ci]);<span class="pl-c"><span class="pl-c">//</span> 昇順</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">				})</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(are3comma <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>rowlen;j<span class="pl-k">++</span>)dataAry[j].<span class="pl-c1">shift</span>();</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">dataAry</span>.<span class="pl-c1">sort</span>(</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-k">!</span>a[ci]) {</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(<span class="pl-k">!</span>b[ci])<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">else</span>     <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span>b[ci]) {</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a[ci] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[ci])<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> (sortType<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>D<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">							((<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a[ci] <span class="pl-k">&gt;</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[ci])<span class="pl-k">?</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">1</span>)<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">							((<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a[ci] <span class="pl-k">&gt;</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[ci])<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">				)</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> dataAry;</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">escapeStrComma</span>(<span class="pl-smi">col_sep</span>,<span class="pl-smi">row_sep</span>,<span class="pl-smi">oj</span>,<span class="pl-smi">removeDoubleQuote</span>){</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> rdq<span class="pl-k">=</span>(removeDoubleQuote)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>mk dmy for comma in &quot;</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dmy <span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>-###<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>###-<span class="pl-pds">&#39;</span></span>],cnt<span class="pl-k">=</span><span class="pl-c1">0</span>,r;</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">			cnt<span class="pl-k">=</span>(<span class="pl-k">function</span> <span class="pl-en">mkdmy</span>(<span class="pl-smi">cnt</span>){</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span>(</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">oj</span>.<span class="pl-c1">indexOf</span>((dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>comma<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]))<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">oj</span>.<span class="pl-c1">indexOf</span>((dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>rn<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]))<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">oj</span>.<span class="pl-c1">indexOf</span>((dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>wDquote<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]))<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">				))<span class="pl-en">mkdmy</span>( <span class="pl-k">++</span>cnt )</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> <span class="pl-k">void</span>(<span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> cnt;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			})(cnt)</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> reg<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>([&quot;](.|(<span class="pl-cce">\r\n</span>|<span class="pl-cce">\r</span>|<span class="pl-cce">\n</span>))*?([&quot;]$|[&quot;][,(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)]))<span class="pl-pds">&#39;</span></span>, <span class="pl-c"><span class="pl-c">//</span>fix rn thanx @shigemk2 20150612</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">				dmystr_comma<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>comma<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]) ,</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">				dmystr_rn<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>rn<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]) ,</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">				dmystr_wDquote<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(dmy[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>wDquote<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>cnt<span class="pl-k">+</span>dmy[<span class="pl-c1">1</span>]) ;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">			escape<span class="pl-k">=</span> <span class="pl-smi">oj</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&quot;<span class="pl-pds">&#39;</span></span>,dmystr_wDquote);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">			escape<span class="pl-k">=</span> <span class="pl-smi">escape</span>.<span class="pl-c1">replace</span>(</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(reg,<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">function</span> (<span class="pl-smi">after</span>,<span class="pl-smi">before</span>,<span class="pl-smi">index</span>) {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">					after<span class="pl-k">=</span> after</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">\r\n</span><span class="pl-k">|</span><span class="pl-c1">\r</span><span class="pl-k">|</span><span class="pl-c1">\n</span>)(?!<span class="pl-k">$</span>)<span class="pl-pds">/</span>g</span>,dmystr_rn) <span class="pl-c"><span class="pl-c">//</span>fix rn thanx @shigemk2 20150612</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>,(?!<span class="pl-k">$</span>)<span class="pl-pds">/</span>g</span>,dmystr_comma)</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> after</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">			)</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">select</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span><span class="pl-k">||</span><span class="pl-smi">op</span>.<span class="pl-smi">select</span> <span class="pl-k">==</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">					r<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">mkArray</span>(escape,<span class="pl-smi">op</span>.<span class="pl-smi">col_sep</span>,<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span>);</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span>	r<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id]<span class="pl-k">=</span><span class="pl-en">mkSelectedArray</span>(escape,<span class="pl-smi">op</span>.<span class="pl-smi">col_sep</span>,<span class="pl-smi">op</span>.<span class="pl-smi">row_sep</span>,<span class="pl-smi">op</span>.<span class="pl-smi">select</span>)</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> b<span class="pl-k">=</span>[],rowlen<span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-c1">length</span>,collen<span class="pl-k">=</span>r[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>rowlen;i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(r[i]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">				b[i]<span class="pl-k">=</span>r[i];</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>collen;j<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">						b[i][j]<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-en">trim</span>(r[i][j])</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&quot;<span class="pl-k">|</span>&quot;<span class="pl-k">$</span><span class="pl-pds">/</span>g</span>,rdq)</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(dmystr_comma,<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>),<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(dmystr_rn,<span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>),(<span class="pl-smi">op</span>.<span class="pl-smi">crlf2br</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;br&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)) <span class="pl-c"><span class="pl-c">//</span>fix rn thanx @shigemk2 20150612</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">							.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(dmystr_wDquote,<span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>),<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">catch</span>(e){}</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> b</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">mkSelectedArray</span>(<span class="pl-smi">data</span>,<span class="pl-smi">col_sep</span>,<span class="pl-smi">row_sep</span>,<span class="pl-smi">select</span>){</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> rows<span class="pl-k">=</span><span class="pl-smi">data</span>.<span class="pl-c1">split</span>(row_sep),rc<span class="pl-k">=</span>[],c<span class="pl-k">=</span>[],</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">				    rowlen<span class="pl-k">=</span><span class="pl-smi">rows</span>.<span class="pl-c1">length</span> ;</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>rowlen;i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-en">trim</span>(rows[i])<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">						rc[i]<span class="pl-k">=</span>rows[i].<span class="pl-c1">split</span>(col_sep);</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">						c[i]<span class="pl-k">=</span>[];</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">select</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">							c[i].<span class="pl-c1">push</span>(rc[i][select[j]])</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">catch</span>(e){ }</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> c<span class="pl-k">||</span>rc</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">mkArray</span>(<span class="pl-smi">data</span>,<span class="pl-smi">col_sep</span>,<span class="pl-smi">row_sep</span>){</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> rows<span class="pl-k">=</span><span class="pl-smi">data</span>.<span class="pl-c1">split</span>(row_sep),rc<span class="pl-k">=</span>[]</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">				    rowlen<span class="pl-k">=</span><span class="pl-smi">rows</span>.<span class="pl-c1">length</span> ;</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>rowlen;i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-smi">$</span>.<span class="pl-en">trim</span>(rows[i])<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">						rc[i]<span class="pl-k">=</span>rows[i].<span class="pl-c1">split</span>(col_sep);</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">catch</span>(e){ }</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> rc</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">setDefault</span>(<span class="pl-smi">settingName</span>,<span class="pl-smi">val</span>){</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> prop <span class="pl-k">=</span> (setting[settingName]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span><span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">				 setting[settingName]<span class="pl-k">==</span><span class="pl-c1">null</span>)<span class="pl-k">?</span>val<span class="pl-k">:</span>setting[settingName]</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> prop</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">chkThreeComma</span>(<span class="pl-smi">data</span>){</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">data</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{1,3}</span>(,<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{3}</span>)<span class="pl-k">*</span>,<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">{3}</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>$.csv2table.cssDefault.className_divなどを変えるとデフォルトCSSを変更できます</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">setCSS</span>(<span class="pl-smi">id</span>){</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">cssDefault</span>.<span class="pl-smi">className_div</span>).<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_div</span>)</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">cssDefault</span>.<span class="pl-smi">className_table</span>).<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_table</span>)</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">		    <span class="pl-k">var</span> tableWith <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-c1">width</span>);</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">		    <span class="pl-k">if</span>(tableWith){</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">		        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>({ width     <span class="pl-k">:</span> tableWith <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>});</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">		    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">		    }</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">cssDefault</span>.<span class="pl-smi">className_table_th</span>).<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_table_th</span>)</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table td<span class="pl-pds">&#39;</span></span>).<span class="pl-en">css</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">cssDefault</span>.<span class="pl-smi">className_table_td</span>).<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_table_td</span>)</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> numTD<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table td:_csv2table_hoboNum<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_hoboNum</span>)</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">numArignRight</span>)<span class="pl-smi">numTD</span>.<span class="pl-en">css</span>({</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">				textAlign        <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">sortable</span>){</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">css</span>(<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">cssDefault</span>.<span class="pl-smi">className_sortMark</span>)</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">addClass</span>(<span class="pl-smi">op</span>.<span class="pl-smi">className_sortMark</span>)</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">each</span>(<span class="pl-k">function</span> (<span class="pl-smi">i</span>,<span class="pl-smi">el</span>) {</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> i <span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">index</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">resetSortImg</span>(id,i);</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span>(op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>i]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>) op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">else</span> op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-en">wrtTable</span>( i,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">sortType</span>,<span class="pl-smi">colIndex</span>,<span class="pl-smi">id</span>){});</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">resetSortImg</span>(<span class="pl-smi">id</span>,<span class="pl-smi">index</span>){</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> thlen<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">_rowsAry</span>[id][<span class="pl-c1">0</span>].<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>thlen;i<span class="pl-k">++</span>)<span class="pl-k">if</span>(i<span class="pl-k">!=</span>index){ op[<span class="pl-s"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>i]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>N<span class="pl-pds">&#39;</span></span>}</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th img.sortimg<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-smi">sortNImg</span> );</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">useChart</span> (<span class="pl-smi">id</span>,<span class="pl-smi">op</span>,<span class="pl-smi">data</span>,<span class="pl-smi">ary</span>){</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> head<span class="pl-k">=</span> ary[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>jqchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dataBody <span class="pl-k">=</span> <span class="pl-smi">ary</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_box</span>).<span class="pl-en">jQchart</span>({</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">				config <span class="pl-k">:</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(op,{</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">					width    <span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">width</span>()<span class="pl-k">+</span><span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">					paddingL <span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table th:nth-child(1)<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">width</span>()<span class="pl-k">+</span><span class="pl-c1">14</span>,</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">					labelX   <span class="pl-k">:</span> (<span class="pl-smi">op</span>.<span class="pl-smi">labelX</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>useChart<span class="pl-pds">&#39;</span></span>)<span class="pl-k">?</span><span class="pl-smi">head</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>)<span class="pl-k">:</span><span class="pl-smi">op</span>.<span class="pl-smi">labelX</span>,</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">					onload   <span class="pl-k">:</span> (<span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-smi">onload</span>)<span class="pl-k">?</span><span class="pl-smi">$</span>.<span class="pl-smi">csv2table</span>.<span class="pl-smi">setting</span>[id].<span class="pl-en">onload</span>(id,op,data,ary)<span class="pl-k">:</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				}),</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">				data <span class="pl-k">:</span> (<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> d <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,len<span class="pl-k">=</span><span class="pl-smi">dataBody</span>.<span class="pl-c1">length</span>;i<span class="pl-k">&lt;</span>len;i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">d</span>.<span class="pl-c1">push</span>(dataBody[i].<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>))</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> d;</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">				})()</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>ccchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">			    <span class="pl-k">var</span> dataBody <span class="pl-k">=</span> ary;</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">ccchart</span>)<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-en">extend</span>(setting,{</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">op</span>.<span class="pl-c1">type</span>,</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> table<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">width</span>()</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> chartdata <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>config<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> setting,</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> ary</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ccchart</span>.<span class="pl-en">init</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api_box</span>, chartdata);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> jqc;</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">use_api</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ccchart<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">			  <span class="pl-k">return</span> <span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">			 <span class="pl-c"><span class="pl-c">//</span>lc = ccchart.ops[op.use_api_box].colorSet;</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">			  jqc <span class="pl-k">=</span>  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_box</span>).<span class="pl-smi">jQchart</span>.<span class="pl-smi">op</span>;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(jqc)lc<span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">op</span>.<span class="pl-smi">use_api_box</span>).<span class="pl-smi">jQchart</span>.<span class="pl-smi">op</span>.<span class="pl-smi">line_strokeStyle</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> lc<span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>red<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#FF9114<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#3CB000<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#00A8A2<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#0036C0<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#C328FF<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#FF34C0<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> dl<span class="pl-k">=</span> <span class="pl-smi">dataBody</span>.<span class="pl-c1">length</span>,lc;</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tr:even<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>id).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>background<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>#eee<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">op</span>.<span class="pl-smi">col0color</span>)</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">each</span>(dataBody,<span class="pl-k">function</span>(<span class="pl-smi">i</span>){</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">			    <span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">    				<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tr:nth-child(<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>dl<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>(dl<span class="pl-k">+</span>i<span class="pl-k">+</span><span class="pl-c1">2</span>)<span class="pl-k">%</span>dl<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">    					.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>color<span class="pl-pds">&#39;</span></span>,lc[i])</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">			    } <span class="pl-k">catch</span>(e){}</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">this</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">})(jQuery);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/toshirot/csv2table/blame/ec981cf37f118b60e362e0cf3add5c3d7c3fdb70/js/jquery.csv2table-0.02-b-4.8.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/toshirot/csv2table/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.26478s from unicorn-84f95bc788-zp9sb">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-rTmClkyJxuWVxD3HuXtPq/5kD0857EfJF77T++HayvDGIYtxo5/ctJc8dYwYj/wSbAU4pD6iSTbLDMs8uNVtlQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-10f86fbecbc74b507bd240fe66202501.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-9EcoLCQwwKtqyd1QeKfEmlfGvwHa6rkLmTG7pJZ3XOxXrg6DjQEZn64BwtWQd7U+w1wlDjQEg034eMGXe7UwKw==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-7f4968b470dc1cbe57f4ef4397879d33.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

