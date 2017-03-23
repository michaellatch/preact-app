import { h, Component } from 'preact';
import style from './style';

let article = {
  firstBreed: {
    name: 'Samoyed',
    src: 'https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Samoyed-1024x536.jpg',
    alt: 'Fluffy Dog Samoyed',
    subtitles: [
      'The Big White Fluffy Dog', 
      'Samoyed Temperament', 
      'The Samoyed Fluffy Coat',
    ],
    paragraphs: [
      'First on our list is this beautiful breed originally out of Siberia.'
      + 'Samoyed puppies were primarily bred to assist in hunting and herding'
      + 'reindeer, as well as hauling sleds. A member of the Spitz group, ' 
      + 'this dog can get up to 2 feet tall at the shoulders and weigh '
      + 'nearly 60 pounds.'
      ,
      'This fluffy dog breed has an incredibly friendly demeanor. They are '
      + 'great around kids, open to strangers and get along great with '
      + 'other dogs. For all these reasons, they make wonderful companions '
      + 'and very poor guard dogs. These pooches are VERY high energy and '
      + 'require a considerable degree of attention and exercise. They '
      + 'are forever happy, but don\'t expect them to snuggle calmly beside '
      + 'you unless you\'ve helped them get some of the energy out '
      + 'beforehand. In terms of trainability, they are intelligent and '
      + 'eager to please.'
      ,
      'This breed has a very beautiful, white coat. However, it requires a '
      + 'good amount of effort to keep it that way. These dogs are built for '
      + 'cold and have a thick double coat. As such, you can expect a large '
      + 'shedding once or twice per year. To keep your Samoyed looking their '
      + 'best, make sure to brush them at minimum of once per week. This '
      + 'keeps the coat looking great and helps reduce tangling.'
    ],
  },

};

export default class Home extends Component {

  render() {
    return (
      <div class={style.home}>
        <h1>{article.firstBreed.name}</h1>
        <img 
          class="" 
          src={article.firstBreed.src}          
          alt={article.firstBreed.alt}/>
        <h2>{article.firstBreed.subtitles[0]}</h2>
        <p>{article.firstBreed.paragraphs[0]}</p>
        <h2>{article.firstBreed.subtitles[1]}</h2>
        <p>{article.firstBreed.paragraphs[1]}</p>
        <h2>{article.firstBreed.subtitles[2]}</h2>
        <p>{article.firstBreed.paragraphs[2]}</p>        
        <h1>Chow Chow</h1>
        <img 
          class="alignnone size-large wp-image-21" src="https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Chow-Chow-1024x536.jpg" alt="Fluffiest dog is a Chow Chow" width="1024" height="536" />
        <h2>The Dog with Two Names</h2>
        Chow Chow, often just called Chow, is a staple of any list of fluffy dogs. Originating in Northern China, this dog breed has a long history and has been genetically confirmed to be one of the oldest dog breeds. Chow Chows are believed to have been general purpose working dogs in China and assisted in a long list of tasks; hunting, herding, hauling and guarding. This breed can typically get up to 20 inches and weigh as much as 70 pounds.
        <h2>Chow Chow Personality</h2>
        At a risk of offending Chow lovers, this isn't exactly the most friendly dog. It takes a large amount of early socialization and positive occurrences with strangers and strange dogs for them to overcome dislike of any new people or dogs. They can be incredibly loyal, but it is often to a single or maybe two family members. They can be intensely protective of that person as well as their home.  They don't require and aren't particularly fond of a lot affection and can have little issues with being left alone. The short version of this paragraph is: to have a well adapted Chow, you have to work hard to ensure they are socialized early and often.
        <h2>A Dog that Looks Like a Bear</h2>
        Chow Chows come in an array of different colored coats (cream, light brown, dark brown, red, grey and a few others). Their broad build and fluffy fur can often result in them resembling other animals, a smallish bear or lion depending on the color of the Chow. Their bushy coats are particularly dense around the neck and head. To ensure your Chow maintains a healthy, good-looking coat, they must be brushed multiple times per week. You can expect heavy shedding of their dense double coat twice each year.
        <h1>Alaskan Malamute</h1>
        <img class="alignnone size-large wp-image-22" src="https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Alaskan-Malamute-1024x536.jpg" alt="Fluffy Alaskan Malamute" width="1024" height="536" />
        <h2>State Dog of Alaska</h2>
        This big guy has been running around the cold of Alaska for about as long as people. Due to their size and strong resistance to cold, the native people to Alaska used them for hunting game, protecting against other wildlife and too help haul loads. In more recent times, Alaskan Malamutes are used as sled dogs for competition races. These bulky dogs can easily be over two feet at their shoulders and a comfortable 85 pounds.
        <h2>Alaskan Malamute Temperament</h2>
        Fun, loving and energetic are the three principle traits of this big fluffy dog. Don't let the wolfish appearance fool you, these guys are well domesticated. In fact, their fondness for just about everyone is the reason they don't make very good guard dogs. It's hard to scare away a home invader by licking him. Alaskan Malamutes get along great with kids, provided their energy isn't too much for the kiddos. They are smart and trainable, but can definitely be stubborn. They don't always get along with other dogs, so make sure to socialize them with other dogs early and often.
        <h2>I'm not a Wolf</h2>
        One look at one of these beauties and it's easy to see why they might be described as looking like a wolf. Their facial features and size are very similar. Like the two previous fluffy dogs, this guy has a thick double coat that sheds ALOT and must be brushed regularly. They have a pretty large build with a bushy coat that usually includes some combination of light grey to black shades. If you're looking for a fun, lovable ball of fur, take a look at one of these.
        <h1>Shetland Sheepdog</h1>
        <img class="alignnone size-large wp-image-23" src="https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Shetland-Sheepdog-1024x536.jpg" alt="Fluffy Small Dog with a great coat." width="1024" height="536" />
        <h2>Our First Small Fluffy Dog</h2>
        The Shetland Sheepdog comes from the Shetland Islands near Scottland and is the first small fluffy dog on our list. These four-legged angels, often called Shelties, and look very similar to the much larger Rough Collie. They are actually distinct breeds, with the Shetland Sheepdog being recognized as a separate breed as early as 1909. Originally utilized as a farmer's helper, they are now quite common and popular as pets. The typical size is 16 inches at the shoulders and a little under 25 pounds.
        <h2>Shetland Sheepdog Personality</h2>
        You will never meet an owner of this breed that doesn't tell you how smart their dog is and it's true. These guys are extremely intelligent, very friendly and a bit more energetic than most dogs. While they get along great with children, they do have a tendency to give into their instinct and try to herd them. If you see this, stop it - sometimes it leads to snipping and biting that you want to discourage. Apart from this very minor issue, they get along great with children, love people and generally do well with other dogs.
        <h2>Check out my Fluffy Coat</h2>
        Although this breed is very similar to Rough Collies in appearance, their small stature seems to increase the puffiness of their coat. Despite having a double coat like the previous dogs on this list, these guys are able to tolerate heat a little better. That said, they're still carrying around a lot of fur and should be brushed at least once per week.
        <h1>Tibetan Mastiff</h1>
        <img class="alignnone size-large wp-image-24" src="https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Tibetan-Mastiff-1024x536.jpg" alt="Soft full coat on a Tibetan Mastiff" width="1024" height="536" />
        <h2>What's in a Name</h2>
        Yes these dogs did originate from Tibet, but no they are not really a Mastiff. They're more Mastiff-like, but descended from a different original breed. These furry monsters can be pretty large with Males having no problem reaching around 30 inches in height and weighing in around 150 pounds. Depending on their color these guys can occasionally fit into the dogs that look like bears category.
        <h2>Tibetan Mastiff Temperament</h2>
        Smart, friendly, loyal and stubborn are the quick highlights on this breed. They were used for centuries as guard dogs for people and animals. As such, they have developed and been bred to work well with people. They will listen to you, love you and sometimes they'll even do what you tell them to. This dog often asserts themselves as equals. They crave companionship and can be a bit irritated if expected to live outside. They get along great with children, their family and other dogs... but not so much with strangers.
        <h2>A Walking Teddy Bear</h2>
        Despite their intimidating size, these dogs are great to cuddle with. Like all dogs, they do need to get some exercise. Still, they don't require running for long periods of time before they say they're ready to get on the couch with you. One interesting note about these guys is that they don't have the big dog smell that sometimes comes with larger breeds. That certainly makes it a little easier to justify having them in the house.
        <h1>Newfoundland</h1>
        <img class="alignnone size-large wp-image-25" src="https://www.certapet.com/dog/wp-content/uploads/sites/3/2017/02/Newfoundland-1024x536.jpg" alt="Gorgeous black Newfoundland dog" width="1024" height="536" />
        <h2>Gentle Giants</h2>
        The Newfoundland breed, also known as Newfies, are well known for their impressive strength and rather docile demeanor. Not surprisingly, these dogs come from Newfoundland, Canada. Although their exact origin is uncertain, they are clearly adapted to life in the cold and near water. For a good portion of their known history they were working dogs for fishermen on Newfoundland due to their strength, work ethic and great swimming ability. These are definitely some large dogs, weighing up to nearly 180 pounds and standing nearly 30 inches at the shoulders.
        <h2>Newfoundland Personality</h2>
        If you're looking for an enormous friend that is calm and friendly, here is a good choice. Although these guys also fit in the dogs that look like bears category, they are only intimidating until you get to know one. They are calm, easy to train and get along with just about everyone. I would say their lack of aggressiveness would make them bad guard dogs, but their massive size and deep voice would probably scare off anyone looking to do harm.
        <h2>Slobber Dog to the Rescue</h2>
        These lovable fur mountains have tendency to drool A LOT. If you have any issues with dog slobber, this may not be the companion for you. But, if you have a fear drowning, these guys may be a dream pet. They've racked up quite a few saves of potential drowning victims in their time. They seem to have an innate drive to rescue people from water, a trait that may have been bred for after working along fishermen for years.
      </div>
    );
  }
}
