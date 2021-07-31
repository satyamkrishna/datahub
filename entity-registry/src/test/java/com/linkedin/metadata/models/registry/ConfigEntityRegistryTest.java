package com.linkedin.metadata.models.registry;

import com.datahub.test.TestEntityProfile;
import com.linkedin.data.schema.annotation.PathSpecBasedSchemaAnnotationVisitor;
import com.linkedin.metadata.models.EntitySpec;
import java.io.FileNotFoundException;
import java.util.Map;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotNull;


public class ConfigEntityRegistryTest {

  @BeforeTest
  public void disableAssert() {
    PathSpecBasedSchemaAnnotationVisitor.class.getClassLoader()
        .setClassAssertionStatus(PathSpecBasedSchemaAnnotationVisitor.class.getName(), false);
  }

  @Test
  public void testEntityRegistry() throws FileNotFoundException {
    ConfigEntityRegistry configEntityRegistry = new ConfigEntityRegistry(
        TestEntityProfile.class.getClassLoader().getResourceAsStream("test-entity-registry.yml"));

    Map<String, EntitySpec> entitySpecs = configEntityRegistry.getEntitySpecs();
    assertEquals(entitySpecs.values().size(), 2);

    EntitySpec entitySpec = configEntityRegistry.getEntitySpec("dataset");
    assertEquals(entitySpec.getName(), "dataset");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "datasetKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 4);
    assertNotNull(entitySpec.getAspectSpec("datasetKey"));
    assertNotNull(entitySpec.getAspectSpec("datasetProperties"));
    assertNotNull(entitySpec.getAspectSpec("schemaMetadata"));
    assertNotNull(entitySpec.getAspectSpec("status"));

    entitySpec = configEntityRegistry.getEntitySpec("chart");
    assertEquals(entitySpec.getName(), "chart");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "chartKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 3);
    assertNotNull(entitySpec.getAspectSpec("chartKey"));
    assertNotNull(entitySpec.getAspectSpec("chartInfo"));
    assertNotNull(entitySpec.getAspectSpec("status"));
  }
}