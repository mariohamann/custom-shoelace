---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<ld-tree>
  <ld-tree-item>
    Deciduous
    <ld-tree-item>Birch</ld-tree-item>
    <ld-tree-item>
      Maple
      <ld-tree-item>Field maple</ld-tree-item>
      <ld-tree-item>Red maple</ld-tree-item>
      <ld-tree-item>Sugar maple</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Oak</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Coniferous
    <ld-tree-item>Cedar</ld-tree-item>
    <ld-tree-item>Pine</ld-tree-item>
    <ld-tree-item>Spruce</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Non-trees
    <ld-tree-item>Bamboo</ld-tree-item>
    <ld-tree-item>Cactus</ld-tree-item>
    <ld-tree-item>Fern</ld-tree-item>
  </ld-tree-item>
</ld-tree>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdTreeItem>
      Deciduous
      <LdTreeItem>Birch</LdTreeItem>
      <LdTreeItem>
        Maple
        <LdTreeItem>Field maple</LdTreeItem>
        <LdTreeItem>Red maple</LdTreeItem>
        <LdTreeItem>Sugar maple</LdTreeItem>
      </LdTreeItem>
      <LdTreeItem>Oak</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Coniferous
      <LdTreeItem>Cedar</LdTreeItem>
      <LdTreeItem>Pine</LdTreeItem>
      <LdTreeItem>Spruce</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Non-trees
      <LdTreeItem>Bamboo</LdTreeItem>
      <LdTreeItem>Cactus</LdTreeItem>
      <LdTreeItem>Fern</LdTreeItem>
    </LdTreeItem>
  </LdTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<ld-select id="selection-mode" value="single" label="Selection">
  <ld-option value="single">Single</ld-option>
  <ld-option value="multiple">Multiple</ld-option>
  <ld-option value="leaf">Leaf</ld-option>
</ld-select>

<br />

<ld-tree class="tree-selectable">
  <ld-tree-item>
    Item 1
    <ld-tree-item>
      Item A
      <ld-tree-item>Item Z</ld-tree-item>
      <ld-tree-item>Item Y</ld-tree-item>
      <ld-tree-item>Item X</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Item B</ld-tree-item>
    <ld-tree-item>Item C</ld-tree-item>
  </ld-tree-item>
  <ld-tree-item>Item 2</ld-tree-item>
  <ld-tree-item>Item 3</ld-tree-item>
</ld-tree>

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('ld-change', () => {
    tree.querySelectorAll('ld-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <LdSelect label="Selection" value={selection} onLdChange={event => setSelection(event.target.value)}>
        <LdMenuItem value="single">single</LdMenuItem>
        <LdMenuItem value="multiple">multiple</LdMenuItem>
        <LdMenuItem value="leaf">leaf</LdMenuItem>
      </LdSelect>

      <br />

      <LdTree selection={selection}>
        <LdTreeItem>
          Item 1
          <LdTreeItem>
            Item A
            <LdTreeItem>Item Z</LdTreeItem>
            <LdTreeItem>Item Y</LdTreeItem>
            <LdTreeItem>Item X</LdTreeItem>
          </LdTreeItem>
          <LdTreeItem>Item B</LdTreeItem>
          <LdTreeItem>Item C</LdTreeItem>
        </LdTreeItem>
        <LdTreeItem>Item 2</LdTreeItem>
        <LdTreeItem>Item 3</LdTreeItem>
      </LdTree>
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<ld-tree class="tree-with-lines">
  <ld-tree-item expanded>
    Deciduous
    <ld-tree-item>Birch</ld-tree-item>
    <ld-tree-item expanded>
      Maple
      <ld-tree-item>Field maple</ld-tree-item>
      <ld-tree-item>Red maple</ld-tree-item>
      <ld-tree-item>Sugar maple</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Oak</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Coniferous
    <ld-tree-item>Cedar</ld-tree-item>
    <ld-tree-item>Pine</ld-tree-item>
    <ld-tree-item>Spruce</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Non-trees
    <ld-tree-item>Bamboo</ld-tree-item>
    <ld-tree-item>Cactus</ld-tree-item>
    <ld-tree-item>Fern</ld-tree-item>
  </ld-tree-item>
</ld-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <LdTreeItem expanded>
      Deciduous
      <LdTreeItem>Birch</LdTreeItem>
      <LdTreeItem expanded>
        Maple
        <LdTreeItem>Field maple</LdTreeItem>
        <LdTreeItem>Red maple</LdTreeItem>
        <LdTreeItem>Sugar maple</LdTreeItem>
      </LdTreeItem>
      <LdTreeItem>Oak</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Coniferous
      <LdTreeItem>Cedar</LdTreeItem>
      <LdTreeItem>Pine</LdTreeItem>
      <LdTreeItem>Spruce</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Non-trees
      <LdTreeItem>Bamboo</LdTreeItem>
      <LdTreeItem>Cactus</LdTreeItem>
      <LdTreeItem>Fern</LdTreeItem>
    </LdTreeItem>
  </LdTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `ld-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<ld-tree>
  <ld-tree-item lazy>Available Trees</ld-tree-item>
</ld-tree>

<script type="module">
  const lazyItem = document.querySelector('ld-tree-item[lazy]');

  lazyItem.addEventListener('ld-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('ld-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <LdTree>
      <LdTreeItem lazy={lazy} onLdLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <LdTreeItem>{item}</LdTreeItem>
        ))}
      </LdTreeItem>
    </LdTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<ld-tree class="custom-icons">
  <ld-icon name="plus-square" slot="expand-icon"></ld-icon>
  <ld-icon name="dash-square" slot="collapse-icon"></ld-icon>

  <ld-tree-item>
    Deciduous
    <ld-tree-item>Birch</ld-tree-item>
    <ld-tree-item>
      Maple
      <ld-tree-item>Field maple</ld-tree-item>
      <ld-tree-item>Red maple</ld-tree-item>
      <ld-tree-item>Sugar maple</ld-tree-item>
    </ld-tree-item>
    <ld-tree-item>Oak</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Coniferous
    <ld-tree-item>Cedar</ld-tree-item>
    <ld-tree-item>Pine</ld-tree-item>
    <ld-tree-item>Spruce</ld-tree-item>
  </ld-tree-item>

  <ld-tree-item>
    Non-trees
    <ld-tree-item>Bamboo</ld-tree-item>
    <ld-tree-item>Cactus</ld-tree-item>
    <ld-tree-item>Fern</ld-tree-item>
  </ld-tree-item>
</ld-tree>

<style>
  .custom-icons ld-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx:react
import { LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => (
  <LdTree>
    <LdIcon name="plus-square" slot="expand-icon"></LdIcon>
    <LdIcon name="dash-square" slot="collapse-icon"></LdIcon>

    <LdTreeItem>
      Deciduous
      <LdTreeItem>Birch</LdTreeItem>
      <LdTreeItem>
        Maple
        <LdTreeItem>Field maple</LdTreeItem>
        <LdTreeItem>Red maple</LdTreeItem>
        <LdTreeItem>Sugar maple</LdTreeItem>
      </LdTreeItem>
      <LdTreeItem>Oak</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Coniferous
      <LdTreeItem>Cedar</LdTreeItem>
      <LdTreeItem>Pine</LdTreeItem>
      <LdTreeItem>Spruce</LdTreeItem>
    </LdTreeItem>

    <LdTreeItem>
      Non-trees
      <LdTreeItem>Bamboo</LdTreeItem>
      <LdTreeItem>Cactus</LdTreeItem>
      <LdTreeItem>Fern</LdTreeItem>
    </LdTreeItem>
  </LdTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<ld-tree class="tree-with-icons">
  <ld-tree-item expanded>
    <ld-icon name="folder"></ld-icon>
    Documents

    <ld-tree-item>
      <ld-icon name="folder"> </ld-icon>
      Photos
      <ld-tree-item>
        <ld-icon name="image"></ld-icon>
        birds.jpg
      </ld-tree-item>
      <ld-tree-item>
        <ld-icon name="image"></ld-icon>
        kitten.jpg
      </ld-tree-item>
      <ld-tree-item>
        <ld-icon name="image"></ld-icon>
        puppy.jpg
      </ld-tree-item>
    </ld-tree-item>

    <ld-tree-item>
      <ld-icon name="folder"></ld-icon>
      Writing
      <ld-tree-item>
        <ld-icon name="file"></ld-icon>
        draft.txt
      </ld-tree-item>
      <ld-tree-item>
        <ld-icon name="file-pdf"></ld-icon>
        final.pdf
      </ld-tree-item>
      <ld-tree-item>
        <ld-icon name="file-bar-graph"></ld-icon>
        sales.xls
      </ld-tree-item>
    </ld-tree-item>
  </ld-tree-item>
</ld-tree>
```

```jsx:react
import { LdIcon, LdTree, LdTreeItem } from '@shoelace-style/leonardo/dist/react';

const App = () => {
  return (
    <LdTree class="tree-with-icons">
      <LdTreeItem expanded>
        <LdIcon name="folder" />
        Root
        <LdTreeItem>
          <LdIcon name="folder" />
          Folder 1<LdTreeItem>
            <LdIcon name="files" />
            File 1 - 1
          </LdTreeItem>
          <LdTreeItem disabled>
            <LdIcon name="files" />
            File 1 - 2
          </LdTreeItem>
          <LdTreeItem>
            <LdIcon name="files" />
            File 1 - 3
          </LdTreeItem>
        </LdTreeItem>
        <LdTreeItem>
          <LdIcon name="files" />
          Folder 2<LdTreeItem>
            <LdIcon name="files" />
            File 2 - 1
          </LdTreeItem>
          <LdTreeItem>
            <LdIcon name="files" />
            File 2 - 2
          </LdTreeItem>
        </LdTreeItem>
        <LdTreeItem>
          <LdIcon name="files" />
          File 1
        </LdTreeItem>
      </LdTreeItem>
    </LdTree>
  );
};
```
