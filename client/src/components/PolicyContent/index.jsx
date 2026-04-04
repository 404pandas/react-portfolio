import { Typography } from "@mui/material";

export function EnglishPolicy() {
  return (
    <>
      <Typography variant="caption" className="whois-policy-date">
        Effective date: April 4, 2026
      </Typography>

      <Typography variant="h6">1. Introduction</Typography>
      <p>
        Who Is...? ("the App") is operated by Mary Elenius ("we," "us," or
        "our"). This Privacy Policy explains what information we collect when
        you use the App, how we use it, and your rights regarding that
        information. By using the App you agree to this policy.
      </p>

      <Typography variant="h6">2. Information We Collect</Typography>
      <p>
        <strong>Account data</strong> — When you create an account we collect
        your chosen username and a bcrypt-hashed version of your password. We
        never store your password in plaintext.
      </p>
      <p>
        <strong>Game and personality data</strong> — Each completed game
        generates personality statistics (trait vote counts, self vs. other
        comparisons, agreement rates, and fun stats). These are stored
        permanently in your account so your profile grows over time.
      </p>
      <p>
        <strong>Social data</strong> — Friend lists, pending friend requests,
        and blocked users are stored to power the social features of the App.
      </p>
      <p>
        <strong>Push notification tokens</strong> — If you allow notifications,
        your Expo push notification token is stored on our server solely to
        deliver game invites and friend request alerts. You can revoke this at
        any time through your device settings.
      </p>
      <p>
        <strong>Temporary session data</strong> — Active game rooms and socket
        IDs are held in server memory only for the duration of a game session.
        They are not persisted to the database.
      </p>
      <p>
        <strong>Guest play</strong> — If you play as a guest, no account data
        is collected. Game stats are stored only in local app memory and are
        cleared when you close the App unless you sign up.
      </p>

      <Typography variant="h6">3. How We Use Your Information</Typography>
      <p>
        We use collected data solely to operate the App: authenticating your
        account, displaying your personality profile, enabling friend and invite
        features, and delivering push notifications you have opted into. We do
        not sell, rent, or share your personal data with advertisers or other
        third parties for their own marketing purposes.
      </p>

      <Typography variant="h6">4. Third-Party Services</Typography>
      <p>
        The App integrates the following third-party services, each of which
        has its own privacy practices:
      </p>
      <ul className="whois-policy-list">
        <li>
          <strong>Google AdMob</strong> — Serves banner advertisements. May
          collect your device's advertising ID and IP address to serve relevant
          ads. See{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Sentry</strong> — Captures crash reports and error logs to
          help us fix bugs. May record device model, OS version, and app state
          at the time of an error. No intentional personal data is sent to
          Sentry.
        </li>
        <li>
          <strong>Stripe</strong> — Processes optional one-time donations. Card
          numbers and payment details are handled entirely by Stripe; we never
          see or store raw payment information. See{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Stripe's Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Expo</strong> — Delivers the app and over-the-air updates,
          and routes push notifications through Expo's push service.
        </li>
        <li>
          <strong>Render</strong> — Hosts our Node.js server and PostgreSQL
          database in the United States.
        </li>
      </ul>

      <Typography variant="h6">5. Data Retention</Typography>
      <p>
        Your account and associated data are retained for as long as your
        account exists. You may request deletion of your account and all
        associated data at any time by contacting us at the address below.
      </p>

      <Typography variant="h6">6. Children's Privacy</Typography>
      <p>
        The App is not directed at children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        believe a child under 13 has provided us with personal information,
        please contact us and we will delete it promptly.
      </p>

      <Typography variant="h6">7. Security</Typography>
      <p>
        Passwords are hashed with bcrypt before storage. All communication
        between the App and our server uses HTTPS. JWTs are stored in the
        device's secure local storage. While we take reasonable precautions, no
        method of transmission over the internet is 100% secure.
      </p>

      <Typography variant="h6">8. Changes to This Policy</Typography>
      <p>
        We may update this Privacy Policy from time to time. When we do, we
        will update the effective date at the top of this page. Continued use
        of the App after changes constitutes acceptance of the updated policy.
      </p>

      <Typography variant="h6">9. Contact</Typography>
      <p>
        Questions or requests regarding this Privacy Policy can be sent to:{" "}
        <a href="mailto:mary.panda.jackson@gmail.com">
          mary.panda.jackson@gmail.com
        </a>
      </p>
    </>
  );
}

export function PiratePolicy() {
  return (
    <>
      <Typography variant="caption" className="whois-policy-date">
        Penned on the 4th tide of April, in the year 2026
      </Typography>

      <Typography variant="h6">1. A Word From the Captain</Typography>
      <p>
        Who Is...? (hereafter "the Ship") be captained by Mary Elenius ("we,"
        "us," or "the crew"). This here Charter of Privacy explains what booty
        we collect when ye sail with us, how we put it to use, and yer rights
        regardin' that plunder. By boardin' the Ship, ye agree to this here
        charter, arrr.
      </p>

      <Typography variant="h6">2. What We Be Pillagin' From Ye</Typography>
      <p>
        <strong>Yer identity papers</strong> — When ye join our crew, we take
        yer chosen name and a dark-magic-scrambled version of yer secret
        passphrase. We never write yer passphrase in plain sight — even Davy
        Jones couldn't read it.
      </p>
      <p>
        <strong>Yer battle records</strong> — Each completed voyage generates
        personality charts (trait tallies, how the crew voted fer ye vs. how ye
        voted fer yerself, and other such curiosities). These be stored in the
        ship's ledger permanently so yer legend grows with every game.
      </p>
      <p>
        <strong>Yer crew manifest</strong> — Yer list of allies, pending crew
        invitations, and enemies (blocked scallywags) be kept to power the
        social features of the Ship.
      </p>
      <p>
        <strong>Yer carrier pigeons</strong> — If ye allow notifications, yer
        Expo push token be stored on our server solely to deliver game invites
        and friend-request alerts. Ye can release the pigeons at any time
        through yer device's crow's nest settings.
      </p>
      <p>
        <strong>Sand in the hourglass</strong> — Active game rooms and socket
        IDs be held in the ship's memory only fer the duration of a voyage. When
        the game ends, they vanish like sea foam — not a trace in the ledger.
      </p>
      <p>
        <strong>Stowaway mode</strong> — If ye sneak aboard as a guest, we
        collect no identity papers. Yer game stats be stashed in the ship's
        hold (local memory) and walk the plank when ye close the App — unless
        ye sign yer name to the crew roster first.
      </p>

      <Typography variant="h6">3. What We Do With Yer Plunder</Typography>
      <p>
        We use yer plunder solely to keep the Ship runnin': provin' yer
        identity at the gangplank, displayin' yer personality legend, enablin'
        crew and invite features, and deliverin' the pigeons ye asked fer. We
        do not sell, trade, or surrender yer personal bounty to merchants,
        landlubbers, or other pirates fer their own purposes. Not a doubloon of
        yer data leaves this ship fer coin.
      </p>

      <Typography variant="h6">4. Our Crew of Allied Guilds</Typography>
      <p>
        The Ship sails with the aid of the following allied guilds, each with
        their own codes of conduct:
      </p>
      <ul className="whois-policy-list">
        <li>
          <strong>Google's Treasure Hunters (AdMob)</strong> — Hangs banners
          in the Ship's corridors. May note yer device's advertisin' mark and
          harbor of origin to show ye fitting advertisements. See{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Google's Privacy Charter
          </a>
          .
        </li>
        <li>
          <strong>The Ship's Lookout (Sentry)</strong> — Watches fer crashes
          and keeps a log when somethin' goes overboard. May record yer device
          model, OS, and the ship's state at the moment of disaster. No
          personal plunder be intentionally sent to the lookout's tower.
        </li>
        <li>
          <strong>The Port Merchants (Stripe)</strong> — Handles yer optional
          doubloon donations. Yer coin and card details be counted entirely by
          Stripe's hands — we never lay eyes on raw payment information. See{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Stripe's Privacy Charter
          </a>
          .
        </li>
        <li>
          <strong>The Shipwrights (Expo)</strong> — Built the hull and delivers
          repairs over the air. Also routes yer carrier pigeons through their
          messaging post.
        </li>
        <li>
          <strong>The Harbormaster (Render)</strong> — Keeps the Ship's engine
          room (Node.js server) and treasure vault (PostgreSQL) moored safely
          in the waters of the United States.
        </li>
      </ul>

      <Typography variant="h6">5. How Long We Keep Yer Treasure</Typography>
      <p>
        Yer account and all the plunder associated with it be kept fer as long
        as ye sail under our flag. Ye may request that we scuttle yer records
        and toss the whole lot overboard at any time by sendin' word to the
        address below.
      </p>

      <Typography variant="h6">6. No Young Bilge Rats Allowed</Typography>
      <p>
        This Ship be not suited fer crew members under 13 summers of age. We do
        not knowingly collect identity papers from young bilge rats under 13. If
        ye believe a young'un has snuck their information aboard, send word
        below and we'll make 'em walk the plank promptly.
      </p>

      <Typography variant="h6">7. How We Guard the Treasure Chest</Typography>
      <p>
        Passphrases be scrambled with dark bcrypt magic before bein' locked
        away. All messages between yer device and the Ship sail over encrypted
        HTTPS waters. JWTs be stashed in yer device's secure hold. We take
        every reasonable precaution, but no sea route be 100% safe from
        pirates — even us.
      </p>

      <Typography variant="h6">8. When the Map Changes</Typography>
      <p>
        This here charter may be redrawn from time to time. When it is, the
        date at the top of the scroll shall be updated. Continued sailin' with
        us after the map changes means ye accept the new terms, arrr.
      </p>

      <Typography variant="h6">9. Send a Message in a Bottle</Typography>
      <p>
        Questions or requests regardin' this Privacy Charter can be sent to:{" "}
        <a href="mailto:mary.panda.jackson@gmail.com">
          mary.panda.jackson@gmail.com
        </a>
      </p>
    </>
  );
}
